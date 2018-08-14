var express = require('express');
var path = require('path');
var _=require('lodash')
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var todoRouter=require('./controller/todocontroller');
var userRoute=require('./controller/usercontroller');
var swaggerJSDoc = require('swagger-jsdoc');
var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
 host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./controller/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use('/todos',todoRouter.router);
app.use('/user',userRoute.router);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};