const express = require("express");
const {
  createListController,
  getAllListController,
  deleteListController,
  updateListController,
} = require("../controllers/list.controller");

const router = express.Router();

router.post("/create", createListController);
router.get("/", getAllListController);
router.put("/update/:id", updateListController);
router.delete("/delete/:id", deleteListController);

module.exports = router;
