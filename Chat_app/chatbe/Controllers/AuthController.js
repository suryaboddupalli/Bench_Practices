const Friends = require('../Model/FriendsSchema')
const UserVerify = require('../Model/VerifySchema')
const jwt = require('jsonwebtoken')


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: "asdfg.lkjh12@outlook.com",
        pass: "Asjh12"
    }
})

const register = async (req, res) => {
    try {
        const { Name, Email, Phone, Password } = req.body;
        if (await Friends.findOne({ Email: Email })) {
            res.send('User already exist')
            console.log(Email)
        }
        else {
            const newuser = new Friends({
                Name, Email, Phone, Password
            })
            newuser.save()
                .then((result) => {
                    console.log(result)
                    res.send(result)
                    sendVerificationEmail(result, res)
                })
                .catch((error) => {
                    console.log("error" + error)
                })
        }
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}



const sendVerificationEmail = async ({ Email, _id }, res) => {
    console.log({ Email, _id })
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`
        console.log(otp)

        const mailOptions = {
            from: "asdfg.lkjh12@outlook.com",
            to: Email,
            subject: "verify Otp",
            text: `${otp} verify your email account. Expires in 2 Min`
        }
        console.log(mailOptions)

        const newOtp = new UserVerify({
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
                Email
            }
        })

    } catch (error) {
        res.json({
            status: "Failed"
        })
    }
}

const reSendVerificationEmail = async (req, res) => {
    try {

        const otp = `${Math.floor(1000 + Math.random() * 9000)}`
        console.log(otp)

        const { Email, id } = req.body;

        console.log(Email, id)

        const mailOptions = {
            from: "asdfg.lkjh12@outlook.com",
            to: Email,
            subject: "verify Otp",
            text: `${otp} verify your email account. Expires in 2 Min`
        }
        console.log(mailOptions)

        const newOtp = new UserVerify({
            userId: id,
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
                userId: id,
                Email
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
            res.send("Please enter the required fields")
        } else {
            const userEnteredOtpverification = await UserVerify.find({ userId })
            console.log(userEnteredOtpverification)
            if (userEnteredOtpverification.length <= 0) {
                res.send("Otp Expired")
            } else {
                const { expiresAt } = userEnteredOtpverification[0]
                console.log(expiresAt)
                console.log(Date.now())
                if (expiresAt < Date.now()) {
                    await UserVerify.deleteMany({ userId })
                    res.send("code Expired. Please Request again")
                } else {
                    await UserVerify.find({ otp })
                        .then((data) => {
                            if (data.otp !== otp) {
                                res.send("Invalid code")
                            } else {
                                UserData.updateOne({ _id: userId }, { verify: true })
                                UserVerify.deleteMany({ userId })
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

const getOtp = async (req, res) => {
    try {
        const otpData = await UserVerify.find()
        res.json(otpData)
        console.log(otpData)
    } catch (error) {
        res.send("Internal Server Error")
    }
}




const login = async (req, res) => {
    console.log(req.body)
    try {
        const { Email, Password } = req.body;
        const user = await Friends.findOne({ Email: Email, Password: Password })
        if (user) {
            const payload = {
                id: user.id
            }
            const Token = jwt.sign(payload, "surya", { expiresIn: 360000 })
            res.json({ Token, user })

        } else {
            res.json({
                error: "Invalid Credentials"
            })
        }

    } catch (error) {
        res.send("Internal Server Error")
    }
}

const emailCheck = async (req, res) => {
    const { Email } = req.body
    const user = await Friends.findOne({ Email: Email })
    console.log(user)
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



module.exports = {
    register, login, verifyOtp, getOtp, reSendVerificationEmail, emailCheck, forgotpassword
}