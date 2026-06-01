const { fileUploadService } = require("../services/fileUpload.service");

const fileUploadController = async (req, res) => {
  const file = req.file;
  try {
    const result = await fileUploadService(file);
    return res
      .status(201)
      .json({ message: "File Uploaded Successfully.", file: result });
  } catch (error) {
    console.log("error in controller", error);
  }
};

module.exports = { fileUploadController };
