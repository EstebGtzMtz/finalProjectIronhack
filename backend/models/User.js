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
        default: 'https://img2.freepng.es/20180802/icj/kisspng-user-profile-default-computer-icons-network-video-the-foot-problems-of-the-disinall-foot-care-founde-5b6346121ec769.0929994515332326581261.jpg'
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