const router = require('express').Router();
const apiRoutes = require('./api');

// sets up the api routes
router.use('/api', apiRoutes);
// message if wrong route is used
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
