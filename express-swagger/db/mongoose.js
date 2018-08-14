var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test1234@ds018538.mlab.com:18538/mongodemo');

module.exports = {mongoose};
