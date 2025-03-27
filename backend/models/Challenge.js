const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    funding: { type: Number, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },
    reviewVideos: { type: String }, // Link to review videos
    challengeVideos: { type: String }, // Link to challenge videos
    visibility: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Challenge", challengeSchema);
