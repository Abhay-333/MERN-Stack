//1. server ko start krna aur
//2. db connect krna
const app = require("./src/app");
const connectDb = require("./src/config/db");
const port = 3000;
const users = [];

app.get("/users", (req, res) => {
  return res.status(200).json({
    message: "Users fetched Successfully",
    users,
  });
});

app.post("/users", (req, res) => {
  users.push(req.body);
  return res.status(201).json({
    message: "Users created Successfully",
  });
});

// partially update
app.patch("/users/update/:index", (req, res) => {
  let { index } = req.params;
  users[index].name = req.body.name;

  return res.send("User's name updated successfully");
});

app.delete("/users/delete/:index", (req, res) => {
  delete users[req.params.index];

  return res.send("Users deleted Successfully");
});

connectDb();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
