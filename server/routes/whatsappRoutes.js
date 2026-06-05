const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappController');

router.post('/whatsapp/acknowledge', whatsappController.handleSendAcknowledgement);

module.exports = router;
