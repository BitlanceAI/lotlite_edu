const WhatsAppSettings = require('../models/WhatsAppSettings');

const _getSettings = async () => {
  let s = await WhatsAppSettings.findOne();
  if (!s) s = await WhatsAppSettings.create({});
  return s;
};

const _sendTemplate = async (to, templateName, components) => {
  const apiUrl = process.env.WHATSAPP_API_URL;
  const apiToken = process.env.WHATSAPP_API_TOKEN;

  if (!apiUrl || !apiToken) {
    console.warn('[WhatsApp] Credentials not configured. Skipping message.');
    return { success: false, message: 'WhatsApp API credentials missing' };
  }

  const formattedPhone = to.replace(/\s+/g, '').replace(/^\+/, '');
  const contactNumber = formattedPhone.length === 10 ? `91${formattedPhone}` : formattedPhone;

  const payload = {
    messaging_product: 'whatsapp',
    to: contactNumber,
    type: 'template',
    template: {
      name: templateName,
      language: { code: 'en' },
      components
    }
  };

  const { default: fetch } = await import('node-fetch');
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiToken}` },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }

  if (!response.ok) throw { status: response.status, data: json };
  return { success: true, data: json };
};

/**
 * Trigger: Website lead form (admission & internship programs)
 * Templates:
 *   - WHATSAPP_TEMPLATE_NAME            (default: acknowledgement_applynow)
 *   - WHATSAPP_INTERNSHIP_TEMPLATE_NAME (default: acknowledgement_internship)
 * Parameters: applicant_name, program_category, specialization
 */
const sendWhatsappAcknowledgement = async (leadData) => {
  const { phone, fullName, programCategory, programSpecialization } = leadData;
  if (!phone) throw new Error('Phone number is required for WhatsApp acknowledgement.');

  const settings = await _getSettings();
  const isInternship = programCategory === 'Career & Internship Co-Op';
  const templateName = isInternship ? settings.internshipTemplate : settings.admissionTemplate;

  const components = [
    {
      type: 'body',
      parameters: [
        { type: 'text', text: fullName || 'Applicant' },           // {{1}}
        { type: 'text', text: programCategory || 'Program' },      // {{2}}
        { type: 'text', text: programSpecialization || 'Specialization' } // {{3}}
      ]
    }
  ];

  try {
    const result = await _sendTemplate(phone, templateName, components);
    console.log(`[WhatsApp] ✓ Acknowledgement sent | template=${templateName} | phone=${phone}`);
    return result;
  } catch (error) {
    console.error('[WhatsApp] ✗ Acknowledgement failed:', error);
    throw error;
  }
};

/**
 * Trigger: WhatsApp Chatbot lead handoff (fires after 30-min idle → processChatbotLead)
 * Template: WHATSAPP_CHATBOT_TEMPLATE_NAME (default: chatbot_lead_confirmed)
 * Parameters: applicant_name, program_category
 *
 * Create this template in Meta Business Manager:
 *   Name: chatbot_lead_confirmed
 *   Body: "Hi {{1}}, thank you for your interest in {{2}} at Lotlite Education.
 *          Our counselor will call you within 24 hours to guide you further."
 */
const sendChatbotLeadAcknowledgement = async (leadData) => {
  const { phone, fullName, programCategory } = leadData;
  if (!phone) throw new Error('Phone number is required for chatbot acknowledgement.');

  const settings = await _getSettings();
  const templateName = settings.chatbotTemplate;

  const components = [
    {
      type: 'body',
      parameters: [
        { type: 'text', text: fullName || 'Applicant' },          // {{1}}
        { type: 'text', text: programCategory || 'our programs' } // {{2}}
      ]
    }
  ];

  try {
    const result = await _sendTemplate(phone, templateName, components);
    console.log(`[WhatsApp] ✓ Chatbot lead confirmation sent | template=${templateName} | phone=${phone}`);
    return result;
  } catch (error) {
    console.error('[WhatsApp] ✗ Chatbot lead confirmation failed:', error);
    throw error;
  }
};

// Helper: sleep for ms milliseconds
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendWhatsappOtp = async (phone, otp, retries = 3, delayMs = 1000) => {
  const apiUrl = process.env.WHATSAPP_API_URL;
  const apiToken = process.env.WHATSAPP_API_TOKEN;

  if (!apiUrl || !apiToken) {
    console.warn('WhatsApp credentials not configured. Skipping WhatsApp OTP.');
    return { success: false, message: 'WhatsApp API credentials missing' };
  }

  // Format phone number
  const formattedPhone = phone.replace(/\s+/g, '').replace(/^\+/, '');
  const contactNumber = formattedPhone.length === 10 ? `91${formattedPhone}` : formattedPhone;

  const payload = {
    messaging_product: "whatsapp",
    to: contactNumber,
    type: "template",
    template: {
      name: "lotlite_otp_verification",
      language: {
        code: "en"
      },
      components: [
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: otp
            }
          ]
        },
        {
          type: "button",
          sub_type: "url",
          index: "0",
          parameters: [
            {
              type: "text",
              text: otp
            }
          ]
        }
      ]
    }
  };

  const { default: fetch } = await import('node-fetch');

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[WhatsApp Service] Sending OTP attempt ${attempt}/${retries} to ${contactNumber}`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        json = { raw: text };
      }

      if (!response.ok) {
        // Check if it's a transient error (Meta code 2) — worth retrying
        const isTransient = json?.error?.is_transient === true || json?.error?.code === 2;

        if (isTransient && attempt < retries) {
          console.warn(`[WhatsApp Service] Transient error on attempt ${attempt}. Retrying in ${delayMs}ms...`);
          await sleep(delayMs * attempt); // exponential backoff: 1s, 2s, 3s
          continue;
        }

        throw { status: response.status, data: json };
      }

      console.log(`[WhatsApp Service] OTP sent successfully on attempt ${attempt}`);
      return { success: true, data: json };

    } catch (error) {
      // If it's the last attempt, throw the error
      if (attempt === retries) {
        console.error('[WhatsApp Service] Error sending OTP after all retries:', error);
        throw error;
      }

      // For network-level errors, also retry
      console.warn(`[WhatsApp Service] Network error on attempt ${attempt}. Retrying...`, error?.message || error);
      await sleep(delayMs * attempt);
    }
  }
};

module.exports = {
  sendWhatsappAcknowledgement,
  sendChatbotLeadAcknowledgement,
  sendWhatsappOtp
};

