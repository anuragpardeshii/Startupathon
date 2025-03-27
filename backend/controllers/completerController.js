const Completer = require("../models/Completer");
const cloudinary = require("../config/cloudinary");

// Create a Completer
exports.createCompleter = async (req, res) => {
  try {
    const { projectName, fullName, position, description, funding, link, visibility } = req.body;

    let iconUrl = "";
    let profilePicUrl = "";

    if (req.files) {
      if (req.files.icon) {
        const iconUpload = await cloudinary.uploader.upload(req.files.icon[0].path);
        iconUrl = iconUpload.secure_url;
      }

      if (req.files.profilePicture) {
        const profileUpload = await cloudinary.uploader.upload(req.files.profilePicture[0].path);
        profilePicUrl = profileUpload.secure_url;
      }
    }

    const newCompleter = new Completer({
      projectName,
      fullName,
      position,
      icon: iconUrl,
      description,
      funding,
      profilePicture: profilePicUrl,
      link,
      visibility
    });

    await newCompleter.save();
    res.status(201).json(newCompleter);
  } catch (error) {
    res.status(500).json({ message: "Error creating completer", error });
  }
};

// Get All Completers
exports.getCompleters = async (req, res) => {
  try {
    const completers = await Completer.find();
    res.json(completers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching completers", error });
  }
};

// Get Single Completer
exports.getCompleterById = async (req, res) => {
  try {
    const completer = await Completer.findById(req.params.id);
    if (!completer) return res.status(404).json({ message: "Completer not found" });

    res.json(completer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching completer", error });
  }
};

// Update Completer
exports.updateCompleter = async (req, res) => {
  try {
    const { projectName, fullName, position, description, funding, link, visibility } = req.body;

    let updateData = { projectName, fullName, position, description, funding, link, visibility };

    if (req.files) {
      if (req.files.icon) {
        const iconUpload = await cloudinary.uploader.upload(req.files.icon[0].path);
        updateData.icon = iconUpload.secure_url;
      }

      if (req.files.profilePicture) {
        const profileUpload = await cloudinary.uploader.upload(req.files.profilePicture[0].path);
        updateData.profilePicture = profileUpload.secure_url;
      }
    }

    const completer = await Completer.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!completer) return res.status(404).json({ message: "Completer not found" });

    res.json(completer);
  } catch (error) {
    res.status(500).json({ message: "Error updating completer", error });
  }
};

// Delete Completer
exports.deleteCompleter = async (req, res) => {
  try {
    const completer = await Completer.findByIdAndDelete(req.params.id);
    if (!completer) return res.status(404).json({ message: "Completer not found" });

    res.json({ message: "Completer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting completer", error });
  }
};
