const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,

        },
        email: {
            type: String,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
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

// Create a virtual property `friendCount` that gets the length of the users' friends array field on query.
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    })


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
