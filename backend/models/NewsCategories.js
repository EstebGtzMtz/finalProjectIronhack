const { model, Schema } = require('mongoose');

const newsCategories = new Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = model('NewsCategories', newsCategories);