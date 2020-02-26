const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const { signupPost, logoutGet, profileGet } = require('../controllers/authControllers')
const { isAuth } = require('../middlewares/index')

// const isAuth = (req, res, next) => {
//     req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
// }

router.post('/signup', signupPost);

router.post('/login', passport.authenticate('local'), async(req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    res.status(200).json({ ok: true, user })
});

router.get('/logout', logoutGet);

router.get('/profile', isAuth, profileGet);


module.exports = router;