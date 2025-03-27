const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    profilePic: { type: String, required: true },
    bioHighlights: { type: String, required: true },
    languages: { type: String, required: true },
    techExpertise: { type: String, required: true },
    businessLink: { type: String, required: true },
    socialLinks: { type: String, required: true }, // Assuming a single link; use Array if multiple
    visibility: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Founder", founderSchema);
