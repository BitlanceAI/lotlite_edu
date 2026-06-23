const ProjectCase = require('../models/ProjectCase');

exports.getProjectCases = async (req, res) => {
  try {
    const projectCases = await ProjectCase.find().sort({ createdAt: -1 });
    res.json(projectCases);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching project cases' });
  }
};

exports.createProjectCase = async (req, res) => {
  try {
    const { founder, company, problem, tag, solution } = req.body;
    
    if (!founder || !company || !problem || !tag || !solution) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newProjectCase = new ProjectCase({
      founder,
      company,
      problem,
      tag,
      solution
    });

    await newProjectCase.save();
    res.status(201).json(newProjectCase);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating project case' });
  }
};

exports.updateProjectCase = async (req, res) => {
  try {
    const { id } = req.params;
    const { founder, company, problem, tag, solution } = req.body;

    const updatedProjectCase = await ProjectCase.findByIdAndUpdate(
      id,
      { founder, company, problem, tag, solution },
      { new: true, runValidators: true }
    );

    if (!updatedProjectCase) {
      return res.status(404).json({ error: 'Project case not found' });
    }

    res.json(updatedProjectCase);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating project case' });
  }
};

exports.deleteProjectCase = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProjectCase = await ProjectCase.findByIdAndDelete(id);

    if (!deletedProjectCase) {
      return res.status(404).json({ error: 'Project case not found' });
    }

    res.json({ message: 'Project case deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting project case' });
  }
};
