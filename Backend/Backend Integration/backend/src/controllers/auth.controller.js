const { registerService, loginService } = require("../services/auth.service");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const registerController = asyncHandler(async (req, res) => {
  const { accessToken, refreshToken, newUser } = await registerService(
    req.body,
  );
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });
  res.status(201).json({
    message: new ApiResponse("User Registered Successfully.", newUser),
  });
});

const loginController = asyncHandler(async (req, res) => {
  const { accessToken, refreshToken, isExisted } = await loginService(req.body);

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });
  res
    .status(201)
    .json(new ApiResponse("User LoggedIn Successfully.", isExisted));
});

const logoutController = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    // secure: true,
    // sameSite: "strict",
  });

  res.status(200).json(new ApiResponse("User LoggedOut Successfully."));
});

module.exports = { registerController, loginController, logoutController };
