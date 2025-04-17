// utils/sendToken.js
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    const options = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production'
    };
  
    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        user
      });
  };
  
  module.exports = sendToken;
  