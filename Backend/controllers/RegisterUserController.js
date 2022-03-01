const UserData = require('../models/RegisterUserSchema')
const UserVerification = require('../models/UserVerificationSchema')

const nodemailer = require("nodemailer")
const { v4: uuidv4 } = require("uuid")
require("dotenv").config();


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});



transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready For Message")
        console.log(success)
    }
})

const SignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, verify } = req.body;
        const newuser = new UserData({
            firstName, lastName, email, password, verify: false
        })
        newuser.save();
        sendVerificationEmail(result, res)
    }
    catch (error) {
        res.send('server error')
    }
}

const sendVerificationEmail = ({ _id, email }, res) => {
    const currentUrl = "http://localhost:8000"
    const uniqueString = uuidv4() + _id
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "verify",
        html: '<p>Verify your email</p>'
    }
}

module.exports = { SignUp }