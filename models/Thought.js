const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: String,
        createdAt: Date,
        username: String,
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `reactionCount` that gets the length of the thought's reactions array field on query.
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    })



const Thought = model('thought', thoughtSchema);

module.exports = Thought;
