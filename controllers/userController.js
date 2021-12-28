const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newuser = new User({
            firstName, lastName, email, password
        })
        newuser.save();
        console.log("saved")
        res.status(200).send('User Registered Successfully')
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
<<<<<<< HEAD
            const data = {
                id: user.id
            }
            const Admin = user.admin
            const Token = jwt.sign(data,'surya')
            res.json({ Token, Admin })
=======
            const Admin = user.admin
            const isLoggedIn = true
            res.json({ isLoggedIn, Admin })
>>>>>>> e6187d1 (28 dec)
        } else {
            res.status(400)
            res.send('Invalid Credentials')
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    register, login, userDetail, user
}