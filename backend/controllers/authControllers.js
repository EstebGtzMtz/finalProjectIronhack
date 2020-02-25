const User = require('../models/User');

exports.signupPost = async(req, res) => {
    const { name, email } = req.body;
    const user = await User.register({ name, email }, password);

}