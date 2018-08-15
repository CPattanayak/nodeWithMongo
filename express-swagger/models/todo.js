var mongoose = require('mongoose');
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

module.exports = {Todo};
