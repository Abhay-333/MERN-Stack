const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abhayd0331@gmail.com",
    pass: "qcjfmbrmrtytsevx",
  },
});

const sendEmails = async (to, subject, text) => {
  const option = { from: "abhayd0331@gmail.com", to, subject, text };
  await transporter.sendMail(option);
};

module.exports = sendEmails;