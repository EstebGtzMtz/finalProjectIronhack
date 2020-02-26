const User = require('../models/User');

exports.signupPost = async(req, res) => {
    const { name, email, password } = req.body;
    const user = await User.register({ name, email }, password);
    res.status(200).json({ ok: true, user })
}

exports.logoutGet = (req, res) => {
    req.logout();
    res.status(200).json({ ok: true, msg: 'Logged out' });
}

exports.profileGet = async(req, res) => {
    const user = await User.findById(req.user._id)
    res.status(200).json({ ok: true, user })
}