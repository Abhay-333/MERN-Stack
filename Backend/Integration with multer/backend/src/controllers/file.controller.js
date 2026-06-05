const { fileUploadService, filesUploadService } = require("../services/fileUpload.service");

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

const filesUploadController = async (req, res) => {
  const files = req.files;
  try {
    const result = await filesUploadService(files   );
    console.log(result)
    return res
      .status(201)
      .json({ message: "Files Uploaded Successfully.", files: result });
  } catch (error) {
    console.log("error in controller", error);
  }
};

module.exports = { fileUploadController, filesUploadController };
