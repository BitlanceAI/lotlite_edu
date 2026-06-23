const express = require('express');
const router = express.Router();
const projectCaseController = require('../controllers/projectCaseController');

router.get('/', projectCaseController.getProjectCases);
router.post('/', projectCaseController.createProjectCase);
router.put('/:id', projectCaseController.updateProjectCase);
router.delete('/:id', projectCaseController.deleteProjectCase);

module.exports = router;
