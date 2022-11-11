const Todo = require('../models/todo')

// @desc to create a new todo
// @method POST
// @route '/'
const addTodo = async (req, res) => {
    const { title, description } = req.body
    try {
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description cant be empty" })
        }
        const todo = await Todo.create(req.body)
        res.status(200).json({ todo })

    } catch (err) {
        res.status(400).json({
            message: "Error occured while creating Todo"
        })
    }
}

// @desc retreive all todos
// @method GET
// @route '/'
const allTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll()

        res.status(200).json({
            todos
        })
    } catch (err) {
        res.status(500).json({ error: "Error fetching Todos" })
    }
}

// @desc to Update a todo
// @method PUT
// @route '/'
const updateTodo = async (req, res) => {
    res.json({
        message: "Todo Updated"
    })
}

// @desc to create a new todo
// @method DELETE
// @route '/'
const deleteTodo = async (req, res) => {
    res.json({
        message: "Todo Deleted"
    })
}

module.exports = {
    addTodo,
    allTodos,
    updateTodo,
    deleteTodo
}