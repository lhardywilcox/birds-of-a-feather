const { Schema, model } = require('mongoose');
const Email = require('mongoose-type-mail');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true,
        },
        email: {
            type: Email,
            unique: [true, 'An Email is required.'],
            require: [true, 'This Email is already in use.'],
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
