import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Error in authentication middleware",
      error: error.message,
    });
  }
};

export default authMiddleware;