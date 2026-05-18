const app = require("./src/app");
const connectDB = require("./src/config/database");
require("dotenv").config();
let port = process.env.PORT || 4000;

connectDB();
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
