
var express = require('express');
var _=require('lodash')
var {Todo,ListConverter} = require('./../models/todo');
var {ObjectID} = require('mongodb');
var router = express.Router();

router.get('/', (req, res) => {
    Todo.find({}).then((todos) => {
        res.send(ListConverter({todos}));
      }, (e) => {
        res.status(400).send(e);
      })
  });

  module.exports.router = router;