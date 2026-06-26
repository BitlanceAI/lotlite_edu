const WhatsAppSettings = require('../models/WhatsAppSettings');

const getSettings = async (req, res) => {
  try {
    let settings = await WhatsAppSettings.findOne();
    if (!settings) settings = await WhatsAppSettings.create({});
    return res.status(200).json({ success: true, data: settings });
  } catch (err) {
    console.error('[WhatsAppSettings] Get error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

const updateSettings = async (req, res) => {
  try {
    const { admissionTemplate, internshipTemplate, chatbotTemplate } = req.body;
    let settings = await WhatsAppSettings.findOne();
    if (!settings) settings = new WhatsAppSettings();
    if (admissionTemplate !== undefined) settings.admissionTemplate = admissionTemplate;
    if (internshipTemplate !== undefined) settings.internshipTemplate = internshipTemplate;
    if (chatbotTemplate !== undefined)    settings.chatbotTemplate    = chatbotTemplate;
    await settings.save();
    return res.status(200).json({ success: true, data: settings });
  } catch (err) {
    console.error('[WhatsAppSettings] Update error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { getSettings, updateSettings };
