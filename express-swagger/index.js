var express = require('express');
var _=require('lodash')
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var todoRouter=require('./controller/todocontroller');
var userRoute=require('./controller/usercontroller');
var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/todos',todoRouter.router);
app.use('/user',userRoute.router);


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};