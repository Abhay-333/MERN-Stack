import LinkModel from "../models/link.model.js";

export const createLink = async (req, res) => {
  try {
    const { title, url } = req.body;
    const user = req.user;

    console.log("Creating link for user:", user);
    if (!title || !url) {
      return res.status(400).json({
        success: false,
        message: "Title and URL are required and must be valid",
      });
    }

    // if (title.length < 3 || title.length > 50) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Title must be between 3 and 50 characters",
    //   });
    // }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const newLink = new LinkModel({
      user: user._id,
      title,
      url,
    });

    const savedLink = await newLink.save();
    return res.status(201).json(savedLink);
  } catch (error) {
    console.error("Error creating link:", error);
    return res
      .status(500)
      .json({ message: "Error creating link", error: error.message });
  }
};

export const getLinksByUsername = async (req, res) => {
  try {
    const username = req.params.username;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const links = await LinkModel.find({ user: user._id });

    return res
      .status(200)
      .json({ message: "Links fetched successfully", links });
  } catch (error) {
    console.error("Error fetching links:", error);
    return res
      .status(500)
      .json({ message: "Error fetching links", error: error.message });
  }
};
