const User = require('../models/userSchema')

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newuser = new User({
            firstName, lastName, email, password
        })
        newuser.save();
        console.log(newuser)
        res.status(200).send(newuser)
    }
    catch (error) {
        res.send('server error')
    }
}

const userDetail = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send('Internal Server Error')
    }
}

const user = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.send('Internal Server Error')
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            console.log(user)
            res.status(400)
            res.send(user)
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    register, login, userDetail, user
}