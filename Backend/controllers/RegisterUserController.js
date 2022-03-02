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
        html: `<p>Verify your email</p> <p>Press<a 
        href=${currentUrl + "user/verify/" + _id + "/" + uniqueString}>Here</a></p>`
    }

    const newVerifier = new UserVerification({
        UserId: _id,
        uniqueString: uniqueString,
        createdAt: Date.now(),
        expiresAt: DataTransfer.now() + 21600000,
    })
    newVerifier.save()
        .then(() => {
            transporter.sendMail(mailOptions)
                .then(() => {
                    res.json({
                        status: "PENDING",
                        message: "Verification email sent"
                    })
                })
                .catch((error) => console.log(error + "2"))
        })
        .catch((error) => {
            console.log(error)
        })
}

const verifyMail = (req, res) => {
    const { userId, uniqueString } = req.params;
    UserVerification.find({ userId })
        .then((result) => {
            if (result.length > 0) {
                const { expiresAt } = result[0]
                if (expiresAt < Date.now()) {
                    UserVerification
                        .deleteOne({ userId })
                        .then(result => {
                            UserData.deleteOne({ _id: userId })
                                .then(() => {
                                    let message = "Link has expired"
                                    res.redirect(`/user/verified/error=true&message=${message}`)
                                })
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            } else {
                let message = "Account has been verified already"
                res.redirect(`/user/verified/error=true&message=${message}`)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = { SignUp }