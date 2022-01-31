const Bank = require('../models/bankSchema')
const User = require('../models/userSchema')


const accountRegister = async (req, res) => {
    try {
        const { Account_Number } = req.body
        const account = await User.findOne({ id: Account_Number })
        const { Name, Username, Password } = req.body;
        if (account) {
            const newRegister = new Bank({
                Name, Username, Password
            })
            newRegister.save();
            console.log(newRegister)
            res.send('register successfull')
        }
    }
    catch (error) {
        res.send(error)
    }
}

const details = async (req, res) => {
    try {
        const account = await Bank.find()
        res.json(account)
    } catch (error) {
        res.send(error)
    }
}



const login = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const account = await Bank.findOne({ Username: Username, Password: Password })
        if (account) {
            console.log(account)
            res.status(400)
            res.send(account)
        }
    }
    catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    accountRegister, login, details
}