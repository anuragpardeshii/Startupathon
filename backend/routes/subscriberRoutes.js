const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

// POST: Add Subscriber
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed successfully", email });
  } catch (error) {
    res.status(500).json({ message: "Error saving email", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscribers", error });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(req.params.id);
    if (!subscriber)
      return res.status(404).json({ message: "Subscriber not found" });
    res.status(200).json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting subscriber", error });
  }
});

module.exports = router;
