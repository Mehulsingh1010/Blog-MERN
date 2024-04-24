export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    expiresIn: process.env.COOKIE_EXPIRES, // Use expiresIn instead of expires
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    token,
    user,
  });
};
