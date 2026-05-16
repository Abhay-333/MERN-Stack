const express = require("express");
const UserModel = require("./models/user.model");

const app = express();
app.use(express.json());

app.post("/create-user", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const newUser = await UserModel.create({
      name,
      email,
      password,
      phone,
    });
    return res
      .status(201)
      .json({ message: "User created Successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({
      message: "Users fetched Successfuly",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/users/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findById(id);
    return res.status(200).json({
      message: "Users fetched Successfuly",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/users/name/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  try {
    const users = await UserModel.findOne({ name });
    return res.status(200).json({
      message: "Users fetched Successfuly",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.put("/users/name/:name", async (req, res) => {
  const { name } = req.params;
  const { email, password, phone } = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      { name },
      { email, password, phone },
      { new: true },
    );
    console.log(user);
    return res.status(200).json({
      message: "User Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

app.delete("/users/name/:name", async (req, res) => {
  const { name } = req.params;

  try {
    await UserModel.findOneAndDelete({ name });
    return res.status(204).json({
      message: "User deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

module.exports = app;
