const whatsappService = require('../services/whatsappService');

const handleSendAcknowledgement = async (req, res) => {
  try {
    const result = await whatsappService.sendWhatsappAcknowledgement(req.body);
    return res.status(200).json({
      success: true,
      message: 'WhatsApp acknowledgement processed',
      data: result
    });
  } catch (err) {
    console.error('[WhatsApp Controller] Error sending acknowledgement:', err);
    if (err.status) {
      return res.status(err.status).json({
        success: false,
        error: 'WhatsApp API call failed',
        detail: err.data
      });
    }
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error'
    });
  }
};

module.exports = {
  handleSendAcknowledgement
};
