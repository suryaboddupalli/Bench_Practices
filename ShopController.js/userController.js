const User = require('../models/userSchema')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            const isLoggedIn =true;
            res.send(isLoggedIn)
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
    login
}