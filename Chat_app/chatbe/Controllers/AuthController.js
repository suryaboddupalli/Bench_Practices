const Friends = require('../Models/FriendsSchema')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { Name, Email, Phone, password } = req.body;
        console.log(req.body.Email)
        if (await Friends.findOne({ Email: Email })) {
            res.send('User already exist')
            console.log(Email)
        }
        else {
            const newuser = new Friends({
                Name, Email, Phone, password
            })
            newuser.save();
            res.send('User Registered Successfully')
        }
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const userDetail = async (req, res) => {
    try {
        const user = await Friends.find()
        res.json(user)
        console.log(user)
    } catch (error) {
        res.send("Internal Server Error")
    }
}


const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        await Friends.findOne({ Email: Email, Password: Password })
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
    register, login, userDetail
}