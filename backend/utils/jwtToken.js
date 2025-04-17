const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
     //setting cookies 
     const options = {
      expires: new Date(
              Date.now() + process.env.COOKIE_EXPIRES_TIME  * 24 * 60 * 60 * 1000 
          ),
      httpOnly: true,
      sameSite: 'Lax', // important
      secure: process.env.NODE_ENV === 'production' 
  };
    res.status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,      
      user
    });
  };  
  module.exports = sendToken;
  