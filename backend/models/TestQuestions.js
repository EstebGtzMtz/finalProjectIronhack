const { model, Schema } = require('mongoose');

const testQuestions = new Schema({
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

module.exports = model('TestQuestions', testQuestions);