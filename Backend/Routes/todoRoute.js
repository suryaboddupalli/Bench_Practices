const express = require('express')
const Router = express.Router()
const todoController = require('../controllers/todoController')

Router.post('/add', todoController.addTodo)

Router.get('/', todoController.details)

Router.get('/:id', todoController.singleTodo)

Router.put('/update/:id', todoController.todoUpdate)

Router.delete('/delete/:id', todoController.todoDelete)


module.exports = Router