const router = require('express').Router();
// defines which file contains the functions required by the router
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers');
// tells the router which functions to use with each route
// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
