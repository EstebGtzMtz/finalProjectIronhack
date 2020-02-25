const { model, Schema } = require('mongoose');

const advancedQuestion = new Schema({
    content: {
        type: String,
        unique: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    correct: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('AdvancedQuestions', advancedQuestion);