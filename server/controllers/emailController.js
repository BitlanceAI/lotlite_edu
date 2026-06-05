const emailService = require('../services/emailService');

const handleSendAcknowledgement = async (req, res) => {
  try {
    const result = await emailService.sendEmailAcknowledgement(req.body);
    return res.status(200).json({
      success: true,
      message: 'Email acknowledgement sent',
      data: result
    });
  } catch (err) {
    console.error('[Email Controller] Error sending acknowledgement:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error'
    });
  }
};

module.exports = {
  handleSendAcknowledgement
};
