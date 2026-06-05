const sendFile = require("../config/imagekit");
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

const filesUploadService = async (files) => {
  if (!files || files.length === 0) {
    throw new Error("Files are required.");
  }

  const uploadedFiles = await Promise.all(
    files.map(async (file) => {
      const uploadedFile = await sendFile(file.buffer, file.originalname);
      return { name: file.originalname, image: uploadedFile.url };
    }),
  );
  const savedFiles = await FileModel.insertMany(uploadedFiles);
  return savedFiles;
};

module.exports = { fileUploadService, filesUploadService };
