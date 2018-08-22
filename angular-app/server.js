var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+'/dist/angular-app')));

const HOST = '0.0.0.0';

app.listen(port,HOST, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
