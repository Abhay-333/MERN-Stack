const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage(); // data buffer mey send hota hai buffer matlab chunks mey data send karega
const upload = multer({ storage });

module.exports = upload;
