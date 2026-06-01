const sendFiles = require("../config/imagekit");
const FileModel = require("../models/file.model");

const fileUploadService = async (file) => {
  if (!file) throw new Error("File is Required.");
  const uploadedFile = await sendFiles(file.buffer, file.originalname);
  const newFile = await FileModel.create({
    name: "trial 1",
    image: uploadedFile.url,
  });
  return newFile;
};

module.exports = { fileUploadService };
