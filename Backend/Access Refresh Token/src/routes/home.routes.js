const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    res.send("This is inside home controller.");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
