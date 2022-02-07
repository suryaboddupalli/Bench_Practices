const Emp = require('../models/empSchema')
const jwt = require('jsonwebtoken')

const empRegister = async (req, res) => {
    try {
        const { Name, EmployeeId, Username, Password } = req.body;
        const newEmployeee = new Emp({
            Name, Username, Password, EmployeeId
        })
        newEmployeee.save()
        res.send(newEmployeee)

    }
    catch (error) {
        res.send(error)
    }
}

const empDetails = async (req, res) => {
    try {
        const Employee = await Emp.find()
        res.json(Employee)
    } catch (error) {
        res.send(error)
    }
}

const empLogin = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const employee = await Emp.findOne({ Username: Username, Password: Password })
        if (employee) {
            const payload = {
                id: employee.id
            }
            const Token = jwt.sign(payload, 'sceret')
            res.send({ Token })
        } else {
            res.status(400).json({
                error: "Invalid Credentials"
            })
        }
    }
    catch (error) {
        res.send(error)
    }
}

module.exports = { empRegister, empDetails, empLogin }