const express = require("express");
const multer = require("multer");
const { createChallenge, getChallenges, getChallengeById, updateChallenge, deleteChallenge } = require("../controllers/challengeController");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), createChallenge);
router.get("/", getChallenges);
router.get("/:id", getChallengeById);
router.put("/:id", upload.single("image"), updateChallenge);
router.delete("/:id", deleteChallenge);

module.exports = router;
