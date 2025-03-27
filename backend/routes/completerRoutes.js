const express = require("express");
const multer = require("multer");
const {
  createCompleter,
  getCompleters,
  getCompleterById,
  updateCompleter,
  deleteCompleter
} = require("../controllers/completerController");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

// router.post("/", upload.fields([{ name: "icon" }, { name: "profilePicture" }]), createCompleter);
router.get("/", getCompleters);
// Upload Founder Image
router.post("/upload-image", upload.single("image"), (req, res) => {
  try {
    res.json({ imageUrl: req.file.path });
  } catch (error) {
    res.status(500).json({ error: "Image upload failed" });
  }
});

// Update Visibility
router.put("/completers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { visibility } = req.body;

    // Find and update the visibility status
    const updatedCompleter = await Completer.findByIdAndUpdate(
      id,
      { visibility: visibility },
      { new: true }
    );

    if (!updatedCompleter) {
      return res.status(404).json({ message: "Completer not found" });
    }

    res.status(200).json(updatedCompleter);
  } catch (error) {
    console.error("Error updating visibility:", error);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/:id", getCompleterById);
router.put("/:id", upload.fields([{ name: "icon" }, { name: "profilePicture" }]), updateCompleter);
router.delete("/:id", deleteCompleter);

module.exports = router;
