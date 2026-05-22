const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const ApiError = require("./utils/apiError");
const errorMiddleware = require("./middlewares/errors.middleware");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// express has there own middleware
// app.use((err, req, res, next) => {
//   // this should be written after all the api calls because this takes controller but we have already written controller in authRoutes and imported in asyncHandler
//   res.status(500).json(new ApiError(err.message,));
// });

app.use(errorMiddleware);
module.exports = app;
