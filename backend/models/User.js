const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        default: 'A1'
    },
    image: {
        type: String,
        default: 'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    test: {
        type: Number,
        default: 0
    },
    advanced: {
        type: Number,
        default: 0
    },
    beginner: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        enum: ['ADMIN', 'GUEST'],
        default: 'GUEST'
    },
    categories: {
        type: [String]
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);