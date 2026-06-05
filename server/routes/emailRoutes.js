const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/email/acknowledge', emailController.handleSendAcknowledgement);

module.exports = router;
