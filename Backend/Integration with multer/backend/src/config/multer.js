const multer = require("multer");

const storage = multer.memoryStorage(); //cloud storage ke liye

let upload = multer({ storage });

module.exports = upload;