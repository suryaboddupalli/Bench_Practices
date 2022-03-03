const UserData = require('../model/userSchema')
const UserVerification = require('../model/verifySchema')


const nodemailer = require('nodemailer');
const res = require('express/lib/response');

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: "asdfg.lkjh12@outlook.com",
        pass: "Asdflkjh12"
    }
})

// const options = {
//     from: "asdfg.lkjh12@outlook.com",
//     to: "suryab.3216@gmail.com",
//     subject: "Demo Mail",
//     text: "Hello Surya"
// }

// transporter.sendMail(options, (error, info) => {
//     if (error) {
//         console.log(error)
//         return;
//     }
//     console.log("message" + info.response)
// })

const signUp = async (req, res) => {
    try {
        const { Name, phone, email, password } = req.body;
        const newuser = new UserData({
            Name, phone, email, password
        })
        newuser.save()
            .then((result) => {
                console.log(result)
                res.send(result._id)
                sendVerificationEmail(result, res)
            })
            .catch((error) => {
                console.log("error" + error)
            })

    }
    catch (error) {
        res.send('server error')
    }
}

const sendVerificationEmail = async ({ email, _id }, res) => {
    console.log(email, _id)

    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`
        console.log(otp)

        const mailOptions = {
            from: "asdfg.lkjh12@outlook.com",
            to: email,
            subject: "verify Otp",
            text: `${otp} verify your email account. Expires in 2 Min`
        }
        console.log(mailOptions)

        const newOtp = new UserVerification({
            userId: _id,
            otp: otp,
            createdAt: Date.now(),
            expiresAt: Date.now() + 120000
        })
        console.log(newOtp)
        await newOtp.save()
        await transporter.sendMail(mailOptions)
        res.json({
            status: "pending",
            message: "verification Otp sent",
            data: {
                userId: _id,
                email
            }
        })

    } catch (error) {
        res.json({
            status: "Failed"
        })
    }
}

const verifyOtp = async (req, res) => {
    try {
        const { userId, otp } = req.body
        console.log(userId, otp)
        if (!userId || !otp) {
            throw Error("Please enter the required fields")
        } else {
            const userEnteredOtpverification = await UserVerification.find({ userId })
            console.log(userEnteredOtpverification)
            if (userEnteredOtpverification.length <= 0) {
                throw new Error("Otp Expired")
            } else {
                const { expiresAt } = userEnteredOtpverification[0]
                console.log(expiresAt)
                console.log(Date.now())
                if (expiresAt < Date.now()) {
                    await UserVerification.deleteMany({ userId })
                    throw new Error("code Expired. Please Request again")
                } else {
                    await UserVerification.find({ otp })
                        .then((data) => {
                            if (data.otp !== otp) {
                                throw new Error("Invalid code")
                            } else {
                                UserData.updateOne({ _id: userId }, { verify: true })
                                UserVerification.deleteMany({ userId })
                                res.json({
                                    status: "verifed",
                                    message: "User Register Successfully"
                                })
                            }
                        })
                }
            }
        }

    } catch (error) {
        console.log(error)
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserData.findOne({ email: email, password: password })
        if (user) {
            res.json("Login Successfully")
        } else {
            res.json('Invalid Credentials')
        }
    }
    catch (error) {
        console.log(error)
    }
}

const emailCheck = (req, res) => {
    const { email } = req.body
    const user = UserData.findOne({ email: email })
    if (user) {
        console.log(user)
        res.send(user)
        sendVerificationEmail(user, res)
    } else {
        console.log("Invalid Email")
    }
}

const forgotpassword = async (req, res) => {
    try {
        const { otp, password, id } = req.body

        await UserVerification.find({ otp })
            .then((data) => {
                if (data.otp === otp) {
                    UserData.updateOne({ _id: id }, { password: password })
                }
            })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { signUp, verifyOtp, login, emailCheck, forgotpassword }