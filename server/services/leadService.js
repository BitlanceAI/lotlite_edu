const Lead = require('../models/Lead');
const emailService = require('./emailService');
const whatsappService = require('./whatsappService');
const agenda = require('../config/agenda');
const dograhService = require('./dograhService');

/**
 * Format payload and send lead to Callyzer
 */
const sendLeadToCallyzer = async (leadData) => {
  const apiKey = process.env.CALLYZER_API_KEY;
  const rawBaseUrl = process.env.CALLYZER_BASE_URL || '';
  const baseUrl = rawBaseUrl.replace(/\/+$/, '');

  if (!apiKey || !baseUrl) {
    throw new Error('Callyzer credentials are not configured in environment variables.');
  }

  const { 
    fullName = '', 
    email = '', 
    phone = '', 
    programCategory = '', 
    programSpecialization = '', 
    source = 'Website Lead',
    lead_tags = ['Loteleite SIEC'] 
  } = leadData;

  // Add source to lead tags if not already present
  const tags = Array.isArray(lead_tags) ? [...lead_tags] : [lead_tags];
  if (source && !tags.includes(source)) {
    tags.push(source);
  }


  // Split name for Callyzer requirements
  const parts = fullName.trim().split(/\s+/);
  const rawFirst = parts[0] || 'Applicant';
  const rawLast = parts.slice(1).join(' ');
  const first_name = rawFirst.length >= 3 ? rawFirst : rawFirst.padEnd(3, '.');
  const last_name = rawLast.length === 0 ? '' : rawLast.length >= 2 ? rawLast : rawLast.padEnd(2, '.');

  // Normalise phone number
  const digits = phone.replace(/\s+/g, '').replace(/^\+/, '');
  const contactNumber = digits.length === 12 && digits.startsWith('91')
    ? `91-${digits.slice(2)}`
    : digits;

  const callyzerPayload = {
    leads: [
      {
        first_name,
        ...(last_name && { last_name }),
        contact_numbers: [contactNumber],
        fields: {
          InputBox1780143703106: email,
          InputBox1780143703123: source !== 'Website Lead' ? `${source} - ${programCategory}` : programCategory,
          InputBox1780143703131: programSpecialization,
        },
      },
    ],
    lead_tags: tags,
    assignment: { strategy: 'Round Robin' },
    existing_lead: {
      lead_details: 'UpdateBlankOnly',
      assignee: 'Ignore',
      lead_tags: 'Ignore',
    },
    is_map_existing_call_logs: true,
  };

  const { default: fetch } = await import('node-fetch');
  const response = await fetch(`${baseUrl}/lead/capture`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(callyzerPayload),
  });

  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }

  if (!response.ok) {
    throw { status: response.status, data: json };
  }

  return json;
};

/**
 * Handle complete lead creation cycle:
 * 1. Save locally to MongoDB
 * 2. Send to Callyzer
 * 3. Update MongoDB status based on Callyzer outcome
 */
const createLead = async (leadData) => {
  // Create and save lead in MongoDB first
  const lead = new Lead(leadData);
  await lead.save();

  console.log('[LeadService] ✓ Lead saved to MongoDB successfully');

  // ── Dograh Voice Agent Calls (fire immediately after save, independent of Callyzer) ──
  // 1. Admission call — fires right now
  dograhService.triggerAdmissionCall(leadData)
    .then(r => console.log(`[Dograh] ✓ Admission call triggered | run_id=${r.workflow_run_id}`))
    .catch(e => console.error('[Dograh] ✗ Admission call failed:', e.message || e));

  // 2. Visit call — fires 30 minutes later via Agenda
  agenda.schedule('in 30 minutes', 'dograh_visit_call', { leadData })
    .then(() => console.log('[Dograh] ✓ Visit call scheduled in 30 minutes'))
    .catch(e => console.error('[Dograh] ✗ Failed to schedule visit call:', e));

  // 3. Follow-up call — fires 24 hours later via Agenda
  agenda.schedule('in 24 hours', 'dograh_followup_call', { leadData })
    .then(() => console.log('[Dograh] ✓ Follow-up call scheduled in 24 hours'))
    .catch(e => console.error('[Dograh] ✗ Failed to schedule follow-up call:', e));
  // ────────────────────────────────────────────────────────────────────────────

  try {
    const callyzerRes = await sendLeadToCallyzer(leadData);
    lead.callyzerStatus = 'sent';
    lead.callyzerResponse = callyzerRes;
    await lead.save();
    
    console.log('[LeadService] ✓ Lead forwarded to Callyzer successfully');



    // Fire and forget email and whatsapp acknowledgements
    emailService.sendEmailAcknowledgement(leadData)
      .then(() => console.log('[LeadService] ✓ Email sent successfully'))
      .catch(e => console.error('[LeadService] ✗ Email error:', e.message || e));
      
    whatsappService.sendWhatsappAcknowledgement(leadData)
      .then(() => console.log('[LeadService] ✓ WhatsApp message sent successfully'))
      .catch(e => console.error('[LeadService] ✗ WhatsApp error:', e.message || e));

    return { lead, callyzerResponse: callyzerRes };
  } catch (err) {
    lead.callyzerStatus = 'failed';
    lead.errorDetail = err.message || JSON.stringify(err.data || err);
    lead.callyzerResponse = err.data || null;
    await lead.save();
    throw err;
  }
};

/**
 * Save/update a WhatsApp chatbot lead — no Callyzer, no Dograh, no notifications.
 * Upserts by phone number so repeat messages update the same document.
 */
/**
 * Upsert chatbot lead — only sets fields that have actual values.
 * chatbotState tracks which step of the button flow the user is on (0-5).
 */
const createChatbotLead = async ({ phone, name, lastMessage, ariaResponse, programInterest, city, email, chatbotState }) => {
  const setFields = {
    phone,
    source: 'WhatsApp Chatbot',
    fullName: name || phone,
    whatsappLastActive: new Date()
  };

  if (lastMessage) setFields.whatsappLastMessage = lastMessage;
  if (ariaResponse) setFields.whatsappAriaResponse = ariaResponse;
  if (programInterest) setFields.programCategory = programInterest;
  if (city) setFields.city = city;
  if (email && email !== 'SKIP_EMAIL') setFields.email = email;
  if (typeof chatbotState === 'number') setFields.chatbotState = chatbotState;

  const lead = await Lead.findOneAndUpdate(
    { phone, source: 'WhatsApp Chatbot' },
    { $set: setFields, $setOnInsert: { lead_tags: ['WhatsApp Chatbot'] } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  console.log(`[LeadService] ✓ Chatbot lead upserted | phone=${phone} | state=${chatbotState}`);
  return lead;
};

/**
 * Get a chatbot lead by phone number.
 * Returns the lead doc or null if new user.
 */
const getLeadByPhone = async (phone) => {
  return await Lead.findOne({ phone, source: 'WhatsApp Chatbot' });
};

/**
 * Returns chatbot leads that have been silent for 30+ minutes and not yet processed.
 * Called by the n8n scheduler to find conversations ready for CRM handoff.
 */
const getPendingChatbotLeads = async () => {
  const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
  return await Lead.find({
    source: 'WhatsApp Chatbot',
    chatbotProcessed: false,
    whatsappLastActive: { $lte: thirtyMinutesAgo }
  }).sort({ whatsappLastActive: 1 }).limit(100);
};

/**
 * Marks a chatbot lead as processed and fires the full CRM pipeline:
 * Callyzer push, Dograh calls, email + WhatsApp acknowledgement.
 * Idempotent — safe to call twice (second call is a no-op).
 */
const processChatbotLead = async (leadId) => {
  // Atomic guard: only the first concurrent caller wins; subsequent calls get null and exit
  const lead = await Lead.findOneAndUpdate(
    { _id: leadId, chatbotProcessed: { $ne: true } },
    { $set: { chatbotProcessed: true, chatbotProcessedAt: new Date() } },
    { new: true }
  );

  if (!lead) {
    const existing = await Lead.findById(leadId);
    if (!existing) throw new Error('Lead not found');
    return existing; // already processed
  }

  console.log(`[LeadService] ✓ Chatbot lead processing started | phone=${lead.phone}`);

  // Push to Callyzer first — only trigger voice calls if CRM registration succeeds
  try {
    const callyzerRes = await sendLeadToCallyzer(lead.toObject());
    await Lead.findByIdAndUpdate(leadId, { $set: { callyzerStatus: 'sent', callyzerResponse: callyzerRes } });
    lead.callyzerStatus = 'sent';

    // Dograh voice calls — fire only after successful Callyzer push
    dograhService.triggerAdmissionCall(lead.toObject())
      .then(r => console.log(`[Dograh] ✓ Chatbot admission call | run_id=${r.workflow_run_id}`))
      .catch(e => console.error('[Dograh] ✗ Chatbot admission call failed:', e.message || e));

    agenda.schedule('in 30 minutes', 'dograh_visit_call', { leadData: lead.toObject() })
      .catch(e => console.error('[Dograh] ✗ Failed to schedule visit call:', e));

    agenda.schedule('in 24 hours', 'dograh_followup_call', { leadData: lead.toObject() })
      .catch(e => console.error('[Dograh] ✗ Failed to schedule follow-up call:', e));

    emailService.sendEmailAcknowledgement(lead.toObject())
      .catch(e => console.error('[LeadService] ✗ Email error:', e.message || e));

    whatsappService.sendChatbotLeadAcknowledgement(lead.toObject())
      .catch(e => console.error('[LeadService] ✗ WhatsApp chatbot ack error:', e.message || e));

  } catch (err) {
    await Lead.findByIdAndUpdate(leadId, { $set: {
      callyzerStatus: 'failed',
      errorDetail: err.message || JSON.stringify(err.data || err),
      callyzerResponse: err.data || null
    }});
    lead.callyzerStatus = 'failed';
  }

  return lead;
};

const getAllLeads = async () => {
  return await Lead.find().sort({ createdAt: -1 });
};

const deleteLead = async (id) => {
  return await Lead.findByIdAndDelete(id);
};


/**
 * Proxy function directly forwarding any payload to Callyzer
 */
const proxyCallyzerLead = async (payload) => {
  const apiKey = process.env.CALLYZER_API_KEY;
  const rawBaseUrl = process.env.CALLYZER_BASE_URL || '';
  const baseUrl = rawBaseUrl.replace(/\/+$/, '');

  if (!apiKey || !baseUrl) {
    throw new Error('Callyzer credentials are not configured in environment variables.');
  }

  const { default: fetch } = await import('node-fetch');
  const response = await fetch(`${baseUrl}/lead/capture`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }

  if (!response.ok) {
    throw { status: response.status, data: json };
  }

  return json;
};

module.exports = {
  createLead,
  createChatbotLead,
  getLeadByPhone,
  getPendingChatbotLeads,
  processChatbotLead,
  proxyCallyzerLead,
  getAllLeads,
  deleteLead
};
