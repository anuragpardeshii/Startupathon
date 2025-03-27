const Founder = require("../models/Founder");

// Create a Founder
exports.createFounder = async (req, res) => {
  try {
    const { name, position, location, bioHighlights, languages, techExpertise, businessLink, socialLinks, visibility } = req.body;

    const newFounder = new Founder({
      name,
      position,
      location,
      bioHighlights,
      languages,
      techExpertise,
      businessLink,
      socialLinks,
      visibility
    });

    await newFounder.save();
    res.status(201).json(newFounder);
  } catch (error) {
    res.status(500).json({ message: "Error creating founder", error });
  }
};

// Get All Founders
exports.getFounders = async (req, res) => {
  try {
    const founders = await Founder.find();
    res.json(founders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching founders", error });
  }
};

// Get Single Founder
exports.getFounderById = async (req, res) => {
  try {
    const founder = await Founder.findById(req.params.id);
    if (!founder) return res.status(404).json({ message: "Founder not found" });

    res.json(founder);
  } catch (error) {
    res.status(500).json({ message: "Error fetching founder", error });
  }
};

// Update Founder
exports.updateFounder = async (req, res) => {
  try {
    const updatedFounder = await Founder.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedFounder) return res.status(404).json({ message: "Founder not found" });

    res.json(updatedFounder);
  } catch (error) {
    res.status(500).json({ message: "Error updating founder", error });
  }
};

// Delete Founder
exports.deleteFounder = async (req, res) => {
  try {
    const founder = await Founder.findByIdAndDelete(req.params.id);
    if (!founder) return res.status(404).json({ message: "Founder not found" });

    res.json({ message: "Founder deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting founder", error });
  }
};
