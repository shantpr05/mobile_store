const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true });

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME
  });
};

userSchema.methods.isValidPassword = async function(enteredPassword){
  return  bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getResetToken = function(){
  //Generate Token
  const token = crypto.randomBytes(20).toString('hex');

  //Generate Hash and set to resetPasswordToken
 this.resetPasswordToken =  crypto.createHash('sha256').update(token).digest('hex');

 //Set token expire time
  this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

  return token
}

module.exports = mongoose.model('User', userSchema);


