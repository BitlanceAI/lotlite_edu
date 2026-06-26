const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/whatsappSettingsController');

router.get('/whatsapp-settings', getSettings);
router.put('/whatsapp-settings', updateSettings);

module.exports = router;
