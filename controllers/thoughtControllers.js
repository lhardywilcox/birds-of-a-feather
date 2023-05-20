const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');

// /api/thoughts
module.exports = {
// GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
// GET a single thought by its id
async getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
// POST to create a new thought (push the created thought's id to the associated user's thoughts array field)
async addNewThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoughts: req.body } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No user with this id!' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
// PUT to update a thought by its id
async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},
// DELETE to remove a thought by its id
async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
},

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field
async addReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        if (!reaction) {
            return res.status(404).json({ message: 'No reactions with this thought!' });
        }

        res.json(reaction);
    } catch (err) {
        res.status(500).json(err);
    }
},
// DELETE to pull and remove a reaction by the reaction's reactionId value
async deleteReaction(req, res) {
    try {
        const reaction = await Reaction.findOneAndRemove({ _id: req.params.reactionId });

        if (!reaction) {
            return res.status(404).json({ message: 'No reaction with this id!' });
        }
        res.json({ message: 'Reaction successfully deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
},

}