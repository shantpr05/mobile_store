const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/authController');
const { isAuthenticatedUser } = require('../middlewares/auth'); 

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

router.get('/me', isAuthenticatedUser, getUserProfile);

module.exports = router;
