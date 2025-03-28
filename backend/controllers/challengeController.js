const Challenge = require("../models/Challenge");
const cloudinary = require("../config/cloudinary");

// Create a Challenge
exports.createChallenge = async (req, res) => {
  try {
    const { title, funding, deadline, description, reviewVideos, challengeVideos, visibility } = req.body;

    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const newChallenge = new Challenge({
      title,
      image: imageUrl,
      funding,
      deadline,
      description,
      reviewVideos,
      challengeVideos,
      visibility
    });

    await newChallenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(500).json({ message: "Error creating challenge", error });
  }
};

// Get All Challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenges", error });
  }
};

// Get Single Challenge
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenge", error });
  }
};

// Update Challenge
exports.updateChallenge =  async (req, res) => {
  try {
    const { title, funding, deadline, description, visibility } = req.body;
    const image = req.file ? req.file.path : existingChallenge.image; // Use new image or keep old one

    const updatedChallenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      { title, funding, deadline, description, visibility, image },
      { new: true }
    );

    res.json(updatedChallenge);
  } catch (err) {
    res.status(500).json({ error: "Failed to update challenge" });
  }
};

// Delete Challenge
exports.deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    res.json({ message: "Challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting challenge", error });
  }
};
