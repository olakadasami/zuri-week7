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
        const todos = await Todo.find()

        res.status(200).json({ todos })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

// @desc to Update a todo
// @method PATCH
// @route '/'
const updateTodo = async (req, res) => {
    try {
        const id = await req.params.id;
        const todo = await Todo.findByIdAndUpdate(id, req.body)
        if (!todo) {
            return res.status(400).json({
                message: "No todo with the Id"
            })
        }
        res.status(200).json({ todo })

    } catch (err) {
        res.status(400).json({ error: err })
    }
}

// @desc to create a new todo
// @method DELETE
// @route '/'
const deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findByIdAndDelete(id)
        if (!todo) {
            return res.status(400).json({
                message: "No todo with the Id"
            })
        }
        res.json({ todo })

    } catch (err) {
        res.status(400).json({ error: err })
    }
}

module.exports = {
    addTodo,
    allTodos,
    updateTodo,
    deleteTodo
}