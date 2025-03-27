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
exports.updateChallenge = async (req, res) => {
  try {
    const { title, funding, deadline, description, reviewVideos, challengeVideos, visibility } = req.body;
    
    let updateData = { title, funding, deadline, description, reviewVideos, challengeVideos, visibility };
    
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.image = result.secure_url;
    }

    const challenge = await Challenge.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Error updating challenge", error });
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
