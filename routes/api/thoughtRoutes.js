const { getThoughts, addNewThought } = require("../../controllers/thoughtControllers");

// /api/thoughts
router.route('/').get(getThoughts).post(addNewThought);

// /api/thoughts/:thoughtId


// /api/thoughts/:thoughtId/reactions


