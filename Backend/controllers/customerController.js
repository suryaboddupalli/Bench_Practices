const Customer = require('../models/customerSchema')


const customerAdding = async (req, res) => {
    try {
        const { Name, Phone, Address, Address_Proof, Pan_Card, Account_Number, Balance } = req.body;
        const newCustomer = new Customer({
            Name, Phone, Address, Address_Proof, Pan_Card, Account_Number, Balance
        })
        newCustomer.save()
        res.send(newCustomer)
    }
    catch (error) {
        res.send(error)
    }
}

const customerDetails = async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch (error) {
        res.send(error)
    }
}

const customer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    } catch (error) {
        console.log(error);
    }
}

const customerUpdate = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id)
        customer.Name = req.body.Name;
        customer.Phone = req.body.Phone;
        customer.Address = req.body.Address;
        customer.Address_Proof = req.body.Address_Proof;
        customer.Pan_Card = req.body.Pan_Card;
        customer.Balance = req.body.Balance;
        const update = customer.save()
        console.log(update);
        res.send('Updated Successfully')

    }
    catch (error) {
        console.log(error);
    }
}

const customerDelete = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id)
        const customers = customer.save()
        res.send('Deleted')

    }
    catch (error) {
        console.log(error);
    }
}



module.exports = { customerAdding, customerDetails, customer, customerUpdate, customerDelete }