import nodemailer from "nodemailer";
import env from "./env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.APP_EMAIL,
    pass: env.APP_PASSWORD,
  },
});

const sendEmail = async (to, subject, html) => {
  let options = {
    from: env.APP_EMAIL,
    to,
    subject,
    html,
  };
  await transporter.sendMail(options);
};

export default sendEmail;
