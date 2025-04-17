const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/sendToken');


exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role
        });

        sendToken(user, 201, res);
    } catch (error) {
      next(error);
    }
};


exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        sendToken(user, 200, res);
    } catch (error) {
      next(error);
    }
};

exports.logoutUser = (req, res, next) => {
    res.cookie('token',null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: 'lax',
        secure: false 
    })
    .status(200)
    .json({
        success: true,
        message: "Logged out"
    });

};
exports.getUserProfile = async (req, res, next) => {
    console.log('GET /me - req.user:', req.user); // 👀 Check if this logs anything
  
    if (!req.user || !req.user._id) {
      return res.status(500).json({ success: false, message: 'User not found in request' });
    }
  
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user
    });
  };
  
  