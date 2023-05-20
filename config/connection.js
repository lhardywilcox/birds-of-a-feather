// sets up database connection
const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/birdsofafeather');

module.exports = connection;
