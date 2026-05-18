const ListModel = require("../models/list.model");

const createListController = async (req, res) => {
  const { taskName, description } = req.body;

  if (!taskName || !description)
    return res.status(400).json({
      message: "All fields are required.",
    });

  try {
    const newTask = await ListModel.create({
      taskName,
      description,
    });

    return res.status(201).json({
      message: "List Create Successfully.",
      lists: newTask,
    });
  } catch (error) {
    console.log("Error in post", error);
    return res.status(500).json({
      message: "Internal Server error.",
    });
  }
};

const getAllListController = async (req, res) => {
  try {
    const allLists = await ListModel.find();

    return res.status(200).json({
      message: "Lists fetched Successfully.",
      allLists,
    });
  } catch (error) {
    console.log("Error in get", error);
    return res.status(500).json({
      message: "Internal Server error.",
    });
  }
};

const updateListController = async (req, res) => {
  const { description } = req.body;
  const listId = req.params.id;

  if (!description)
    return res.status(400).json({
      message: "Description is required.",
    });

  try {
    const updateList = await ListModel.findByIdAndUpdate(
      listId,
      {
        description,
      },
      { new: true },
    );

    if (!updateList)
      return res.status(404).json({
        message: "List not found.",
      });

    return res.status(200).json({
      message: "List Updated Successfully.",
      updateList,
    });
  } catch (error) {
    console.log("Error in get", error);
    return res.status(500).json({
      message: "Internal Server error.",
    });
  }
};

const deleteListController = async (req, res) => {
  const listId = req.params.id;

  try {
    const deletedList = await ListModel.findByIdAndDelete(listId);

    if (!deletedList)
      return res.status(404).json({
        message: "List not found.",
      });

    return res.status(200).json({
      message: "List Deleted Successfully.",
    });
  } catch (error) {
    console.log("Error in get", error);
    return res.status(500).json({
      message: "Internal Server error.",
    });
  }
};

module.exports = {
  createListController,
  getAllListController,
  updateListController,
  deleteListController,
};
