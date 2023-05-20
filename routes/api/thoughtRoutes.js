const router = require('express').Router();
const { 
    getThoughts, 
    addNewThought, 
    getSingleThought,
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction
 } = require("../../controllers/thoughtControllers");

// /api/thoughts
router.route('/').get(getThoughts).post(addNewThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
