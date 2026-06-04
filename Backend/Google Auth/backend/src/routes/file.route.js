const express = require("express");
const {
  fileUploadController,
  filesUploadController,
} = require("../controllers/file.controller");
const upload = require("../config/multer");

const router = express.Router();

router.post("/upload-file", upload.single("image"), fileUploadController);

router.post("/upload-files", upload.array("images",5), filesUploadController);

module.exports = router;
