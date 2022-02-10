const Todo = require('../models/todoSchema')


const addTodo = async (req, res) => {
    try {
        const { Name, Age } = req.body;
        const newTodo = new Todo({
            Name, Age
        })
        newTodo.save()
        res.send('Added Successfully')
    }
    catch (error) {
        res.send(error)
    }
}

const details = async (req, res) => {
    try {
        const data = await Todo.find()
        res.json(data)
    } catch (error) {
        res.send(error)
    }
}

const singleTodo = async (req, res) => {
    try {
        const data = await Todo.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const todoUpdate = async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(req.params.id)
        data.Name = req.body.Name;
        data.Age = req.body.Age;
        data.save()
        res.send('Updated Successfully')
    }
    catch (error) {
        console.log(error);
    }
}

const todoDelete = async (req, res) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id)
        data.save()
        res.send('Deleted')
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = { addTodo, todoDelete, todoUpdate, singleTodo, details }