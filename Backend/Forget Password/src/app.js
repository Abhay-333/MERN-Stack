import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import { fileURLToPath } from "url";

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine","ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/auth", authRoutes);

export default app;
