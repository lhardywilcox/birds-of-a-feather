const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            default: new ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Reaction = model('reaction', userSchema);

module.exports = Reaction;