const express = require("express");
const Founder = require("../models/Founder");
const {
  // createFounder,
  getFounders,
  getFounderById,
  updateFounder,
  deleteFounder,
} = require("../controllers/founderController");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const { name, position, location, profilePic, bioHighlights, languages, techExpertise, businessLink, socialLinks, profileUrl, visibility } = req.body;

    if (!name || !position || !profilePic) {
      return res.status(400).json({ message: "Name, Position, and Profile Picture are required." });
    }

    const newFounder = new Founder({
      name, position, location, profilePic, bioHighlights, languages, techExpertise, businessLink, socialLinks, profileUrl, visibility: visibility ?? true
    });

    await newFounder.save();
    res.status(201).json({ message: "Founder added successfully!", founder: newFounder });

  } catch (error) {
    console.error("Error adding founder:", error.message, error.stack);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/", getFounders);
router.get("/:id", getFounderById);
router.put("/:id", updateFounder);
router.delete("/:id", deleteFounder);
router.put("/:id/toggle-visibility", async (req, res) => {
  try {
    const founder = await Founder.findById(req.params.id);
    if (!founder) return res.status(404).json({ message: "Founder not found" });

    founder.visibility = !founder.visibility; // Toggle visibility
    await founder.save();

    res.json({ message: "Visibility updated", visibility: founder.visibility });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.put("/api/founders/:id", async (req, res) => {
  try {
    const updatedFounder = await Founder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFounder)
      return res.status(404).json({ message: "Founder not found" });

    res.json({
      message: "Founder updated successfully",
      founder: updatedFounder,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
