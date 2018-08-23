var express = require('express');
var path = require('path');
var {mongoose} = require('./db/mongoose');
var app = express();
var bodyParser = require('body-parser');
var todoListRoute=require('./controller/todolistcontroller');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+'/dist/angular-app')));
app.use('/todolist',todoListRoute.router);
const HOST = '0.0.0.0';

app.listen(port,HOST, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
