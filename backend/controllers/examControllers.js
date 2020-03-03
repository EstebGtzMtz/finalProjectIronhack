const User = require('../models/User');

exports.updateAdvancedScore = async(req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    await User.findByIdAndUpdate(id, { advanced: data }, { new: true })
}

exports.updateBeginnerScore = async(req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    await User.findByIdAndUpdate(id, { beginner: data }, { new: true });
}

exports.updateTestScore = async(req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    await User.findByIdAndUpdate(id, { test: data }, { new: true });
}

exports.updateCategories = async(req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    await User.findByIdAndUpdate(id, { categories: data }, { new: true });
}