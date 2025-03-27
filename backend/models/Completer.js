const mongoose = require("mongoose");

const completerSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    logo: { type: String, required: true }, // Cloudinary URL
    name: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    funding: { type: String, required: true },
    profilePicture: { type: String, required: true }, // Cloudinary URL
    linkedin: { type: String, required: true }, 
    visibility: { type: Boolean, default: true }, // Ensure default visibility
  },
  { timestamps: true }
);

module.exports = mongoose.model("Completer", completerSchema);
