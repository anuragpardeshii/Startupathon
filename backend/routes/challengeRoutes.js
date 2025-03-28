const express = require("express");
const multer = require("multer");
const {
  createChallenge,
  getChallenges,
  getChallengeById,
  deleteChallenge,
} = require("../controllers/challengeController");
const Challenge = require("../models/Challenge");
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Routes
router.post("/", async (req, res) => {
  try {
    const { title, funding, description, image, deadline, visibility } =
      req.body;

    const newChallenge = new Challenge({
      title,
      funding,
      description,
      image,
      deadline,
      visibility,
    });

    await newChallenge.save();
    res
      .status(201)
      .json({
        message: "Challenge added successfully",
        challenge: newChallenge,
      });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/", getChallenges);
router.get("/:id", getChallengeById);
router.put("/:id", async (req, res) => {
  try {
    const challengeId = req.params.id;
    const updatedData = req.body;

    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challengeId,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.json(updatedChallenge);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.delete("/:id", deleteChallenge);
router.patch("/:id/visibility", async (req, res) => {
  try {
    const { id } = req.params;
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    challenge.visibility = !challenge.visibility; // Toggle visibility
    await challenge.save();

    res.json({
      message: "Visibility updated",
      visibility: challenge.visibility,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
