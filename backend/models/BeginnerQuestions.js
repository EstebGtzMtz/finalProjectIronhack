const { model, Schema } = require('mongoose');

const beginnerQuestions = new Schema({
    content: {
        type: String,
        unique: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('BeginnerQuestions', beginnerQuestions);