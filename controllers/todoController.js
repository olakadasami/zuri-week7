// @desc to create a new todo
// @method POST
// @route '/'
const addTodo = async (req, res) => {
    res.json({
        message: "Todo Added"
    })
}

// @desc retreive all todos
// @method GET
// @route '/'
const allTodos = async (req, res) => {
    res.json({
        message: "All todoss"
    })
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