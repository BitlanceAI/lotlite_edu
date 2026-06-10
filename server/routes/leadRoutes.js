const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

router.post('/leads', leadController.handleCreateLead);
router.post('/callyzer/lead', leadController.handleProxyCallyzerLead);
router.get('/leads', leadController.handleGetLeads);

module.exports = router;
