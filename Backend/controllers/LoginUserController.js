const UserData = require('../models/RegisterUserSchema')
const UserVerification = require('../models/UserVerificationSchema')
require("dotenv").config()

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })
        if (user) {
            console.log(user)
            res.status(400)
            res.send(user)
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

const ForgotPassword = (req,res)=>{
    const {email}=req.body
    UserData.findOne({email}.(err,user)=>{
        if(!user){
            return res.send("user Not Found")
        }
        const  data = {
            from :process.env.AUTH_EMAIL
            to:eamil
            subject:"Forget Password"
            heml:`<p>Aceept the Account Password Change</p>`
        }
    })
    return UserData.updateOne(_id,error,sucsess){
        if(error){
            return res.send("error")
        }
    }
}

module.exports = {login,ForgotPassword}