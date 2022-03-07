const User = require('../model/userschema')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { Name, Email, Phone, Password } = req.body;
        await User.findOne({ Email: Email })
            .then((data) => {
                if (data.Email === Email) {
                    res.send('User Already Exist')
                }
            }).catch((error) => {
                res.send(error);
            })
        const newuser = new User({
            Name, Email, Phone, Password
        })
        newuser.save();
        res.send("User Registered Successfully")
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        await User.findOne({ Email: Email, Password: Password })
            .then((data) => {
                if (data) {
                    let Admin = false
                    if (data.Admin == true) {
                        Admin = true
                    }
                    const payload = {
                        id: data.id
                    }
                    const Token = jwt.sign(payload, sceret, { expiresIn: 360000 })
                    res.json({ Token, Admin })
                }
                else {
                    res.json({
                        error: "Invalid Credentials"
                    })
                }
            })
            .catch((error) => {
                res.send(error)
            })

    } catch (error) {
        res.send("Internal Server Error")
    }
}


module.exports = {
    register, login
}