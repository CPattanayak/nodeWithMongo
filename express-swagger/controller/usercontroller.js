var express = require('express');
var router = express.Router();
var {User} = require('./../models/user');
var {ObjectID} = require('mongodb');

router.post('/', (req, res) => {
    var user = new User({
      email: req.body.email
    });
  
    user.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });


  router.get('/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    Todo.findById(id).then((user) => {
      if (!user) {
        return res.status(404).send();
      }
  
      res.send({user});
    }).catch((e) => {
      res.status(400).send();
    });
  });

  module.exports.router = router;