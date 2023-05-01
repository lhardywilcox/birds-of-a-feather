const { Schema, model } = require('mongoose');

// Schema to create User model
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


        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);