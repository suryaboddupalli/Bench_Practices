const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const key = 'surya'

const userDetails = async (req, res) => {
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
        if (!user.email) {
            res.send('Invalid Email')
            
        }else if(!user.password) {
            res.send('Invalid Password')
        } else {
            const payload = {
                userData: {
                    id: user.id
                }
            }
            const Admin = user.admin
            const Token = jwt.sign(payload, key)
            res.json({ Admin, Token })
        }
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const userUpdate = async (req, res) => {
    try {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        const user = await User.findByIdAndUpdata(req.params.id, data)
        res.json(user)
    } catch (error) {
        res.send('Internal Server Error')
    }
}


module.exports = {
    login, userDetails, userUpdate, user
}