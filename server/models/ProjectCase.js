const mongoose = require('mongoose');

const ProjectCaseSchema = new mongoose.Schema({
  founder: { type: String, required: true },
  company: { type: String, required: true },
  problem: { type: String, required: true },
  tag: { type: String, required: true },
  solution: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('ProjectCase', ProjectCaseSchema);
