const express = require('express')
const router = express.Router()

const { addTodo, allTodos, updateTodo, deleteTodo } = require('../controllers/todoController')

router.get('/', allTodos)
router.post('/', addTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router