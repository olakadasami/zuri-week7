const express = require('express')
const router = express.Router()

const { addTodo, allTodos, updateTodo, deleteTodo } = require('../controllers/todoController')

router.get('/', allTodos)
router.post('/', addTodo)
router.put('/', updateTodo)
router.delete('/', deleteTodo)

module.exports = router