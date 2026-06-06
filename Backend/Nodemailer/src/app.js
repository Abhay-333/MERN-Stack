const express = require("express");
const sendEmails = require("./config/mail.service");

const app = express();

app.get("/sendmail", async (req, res) => {
  await sendEmails(
    "rdha2209@gmail.com",
    "greetings from Abhay Dhaneshwar",
    "Good Morning...",
  );
  res.send("Email sent!")
});

app.use(express.json());
module.exports = app;
