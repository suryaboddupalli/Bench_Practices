const User = require('../model/userschema')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        if (await User.findOne({ email: email })) {
            res.send('User already exist')
        } else {
            const newuser = new User({
                name, email, phone, password
            })
            newuser.save();
            res.status(200).send('User Registered Successfully')
        }
    }
    catch (error) {
        res.status(500).send(error)
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            const payload = {
                id: user.id
            }
            const Admin = user.admin
            const Token = jwt.sign(payload, 'surya')
            res.status(200).json({ Token, Admin })
        } else {
            res.json({
                error: 'Invalid Credentials'
            })
        }
    }
    catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register, login
}