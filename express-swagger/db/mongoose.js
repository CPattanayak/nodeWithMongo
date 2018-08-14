var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoUrl= process.env.MONGO_URL || 'mongodb://localhost:27017/TodoApp'

mongoose.connect('mongodb://test:test1234@ds018538.mlab.com:18538/mongodemo');

module.exports = {mongoose};
