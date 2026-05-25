const express = require("express");
const upload = require("../config/multer");
const sendFiles = require("../config/imageKit");

const router = express.Router();

// router.post("/upload-files", upload.single("image"), (req, res) => {    // upload.single mey ek hi file aa sakti hai
//   console.log(req.file);
//   res.send(req.body);
// });

// router.post("/upload-files", upload.array("images"), (req, res) => {    // upload.array mey multiple files aa sakti hai
//   console.log(req.files);
//   res.send(req.body);
// });

// router.post("/upload-files", upload.single("image"), async (req, res) => {
//   console.log(req.file);
//   const uploadedFiles = await sendFiles(req.file.buffer, req.file.originalname);
//   console.log(uploadedFiles); // single file upload kr ne ke liye
//   res.send(req.body);
// });

router.post("/upload-files", upload.array("images"), async (req, res) => {
  const files = req.files;
  const uploadedFiles = await Promise.all(
    files.map((file) => sendFiles(file.buffer, file.originalname)),
  );
  console.log(uploadedFiles); // multiple file upload kr ne ke liye
  res.send(req.body);
});

module.exports = router;
