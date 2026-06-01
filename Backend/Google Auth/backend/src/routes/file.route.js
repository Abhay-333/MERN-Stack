const express = require("express");
const { fileUploadController } = require("../controllers/file.controller");
const upload = require("../config/multer");

const router = express.Router();

router.post("/upload-files", upload.single("image"), fileUploadController);

module.exports = router;
