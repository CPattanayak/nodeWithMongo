var mongoose = require('mongoose');
var JM = require('json-mapper');

/**
 * @swagger
 * definition:
 *   Todo:
 *     properties:
 *       text:
 *         type: string
 *       completed:
 *         type: boolean
 *       completedAt:
 *         type: integer
 */
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var DetailConverter=JM.makeConverter({
  TodoName: 'text',
  TodoStatus: 'completed',
  TodoComplietedTime: 'completedAt',
  Pk: '_id'

});

var ListConverter = JM.makeConverter({
  todos: ['todos', JM.map({
                            TodoName: 'text',
                            TodoStatus: 'completed',
                            TodoComplietedTime: 'completedAt',
                            Pk: '_id'
                          })
         ]
});
module.exports = {Todo,DetailConverter,ListConverter};
