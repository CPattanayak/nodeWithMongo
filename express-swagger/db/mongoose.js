var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoUrl= process.env.MONGO_URL || 'mongodb://localhost:27017/TodoApp'

mongoose.connect(mongoUrl);

module.exports = {mongoose};
