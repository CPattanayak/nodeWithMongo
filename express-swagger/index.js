var express = require('express');
var path = require('path');
var _=require('lodash')
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var todoRouter=require('./controller/todocontroller');
var userRoute=require('./controller/usercontroller');
var todoListRoute=require('./controller/todolistcontroller');
var swaggerJSDoc = require('swagger-jsdoc');
var app = express();
var os = require('os');
var hostname = 'localhost';
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const HOST = '0.0.0.0';
// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
 host: `${hostname}:${port}`,
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./models/*.js','./controller/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use('/todos',todoRouter.router);
app.use('/todolist',todoListRoute.router);
app.use('/user',userRoute.router);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.listen(port,HOST, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};