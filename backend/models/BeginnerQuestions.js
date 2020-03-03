const { model, Schema } = require('mongoose');

const beginnerQuestions = new Schema({
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
        enum: ['optionA', 'optionB', 'optionC', 'optionD'],
        default: 'optionA',
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

module.exports = model('BeginnerQuestions', beginnerQuestions);