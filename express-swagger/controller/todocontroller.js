
var express = require('express');
var _=require('lodash')
var {Todo} = require('./../models/todo');
var {ObjectID} = require('mongodb');
var router = express.Router();
/**
 * @swaggar
 * definitions:
 *   Todo:
 *     properties:
 *       name:
 *         type: string
 */


/**
 * @swagger
 * /todos:
 *   post:
 *     tags:
 *       - Todos
 *     description: Creates a new Todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: todo
 *         description: Todo object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Todo'
 *         
 *     responses:
 *       200:
 *         description: Successfully created
 * 
 */
router.post('/', (req, res) => {
    var todo = new Todo({
      text: req.body.text,
      completed: req.body.completed,
      completedAt: req.body.completedAt
    });
  
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });
/**
 * @swagger
 * /todos/{id}:
 *   patch:
 *     tags:
 *       - Todos
 *     description: Updates a single todoId
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Todo id
 *         in: path
 *         required: true
 *         type: string
 *       - name: todo
 *         description: Todo object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Todo'
 * 
 *     responses:
 *       200:
 *         description: Successfully updated
 */
  router.patch('/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    console.log('Received text',body.text);
    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }
  
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    })
  });
/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     tags:
 *       - Todos
 *     description: Returns a single Todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Todo's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single Todo
 *         schema:
 *           $ref: '#/definitions/Todo'
 */
  router.get('/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  });

 /**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     tags:
 *       - Todos
 *     description: Deletes a single todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: todo id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
  router.delete('/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  });
/**
 * @swagger
 * definitions:
 *   Todo:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */
  module.exports.router = router;