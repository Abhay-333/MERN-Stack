const app = require("./src/app");
const port = 3000;
const users = [];

app.get("/users", (req, res) => {
  return res.status(200).json({
    message: "Users fetched Successfully",
    users,
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
