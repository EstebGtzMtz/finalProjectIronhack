const { model, Schema } = require('mongoose');

const advancedQuestion = new Schema({
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

module.exports = model('AdvancedQuestions', advancedQuestion);