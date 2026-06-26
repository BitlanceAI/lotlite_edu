const mongoose = require('mongoose');

const WhatsAppSettingsSchema = new mongoose.Schema({
  admissionTemplate: { type: String, default: 'acknowledgement_applynow' },
  internshipTemplate: { type: String, default: 'acknowledgement_internship' },
  chatbotTemplate:    { type: String, default: 'chatbot_lead_confirmed' },
}, { timestamps: true });

module.exports = mongoose.model('WhatsAppSettings', WhatsAppSettingsSchema);
