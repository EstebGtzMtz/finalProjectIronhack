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
        default: 'https://www.bkie.com/dist/assets/images/default-user.png'
    },
    advanced: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['ADMIN', 'GUEST'],
        default: 'GUEST'
    },
    categories: {
        type: [Schema.Types.ObjectId],
        ref: 'NewsCategories'
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);