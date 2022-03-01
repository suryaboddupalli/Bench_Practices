const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/local"
const app = express();
const nodemailer = require('nodemailer')
require('dotenv').config()

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
const bodyParser = require("express").json
app.use(bodyParser())

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASS
    }
};
var transporter = nodemailer.createTransport(smtpConfig);



transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Ready For Message")
        console.log(success )
    }
})

app.post("/sentmail",(req,res)=>{
    const{to,subject,message}=req.body;

    const mailOptions ={
        from :process.env.AUTH_EMAIL,
        to:to,
        subject:subject,
        text:message
    }
    transporter.sendmail(mailOptions)
    .then(()=>{
        res.json({
            status:"success",
            message:"Message sent successfully"
        })
    })
    .catch((error)=>{
        console.log(error)
        res.json({status:"Fail"})
    })
})


app.listen(9000, () => {
    console.log('server connected')
})