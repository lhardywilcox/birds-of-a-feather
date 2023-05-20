const router = require('express').Router();
// defines where to find the userRoutes and thoughtRoutes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// tells the router what file to use for each route
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;