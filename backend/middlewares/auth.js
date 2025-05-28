const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('./catchAsyncError');

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer') &&
      req.headers.authorization.split(' ')[1]);

  if (!token) {
    return next(new ErrorHandler('Please login to access this resource', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  if (!req.user) {
    return next(new ErrorHandler('User not found', 401));
  }

  next();
});