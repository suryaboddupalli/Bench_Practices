const UserData = require('../Models/UserDataSchema')

const add = async (req, res) => {
    try {
        const { Name, Email, Phone, Address } = req.body;
        const newuser = await new UserData({
            Name, Email, Phone, Address
        })
        newuser.save();
        res.send('User Added Successfully')
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const usersDetails = async (req, res) => {
    try {
        const users = await UserData.find()
        res.json(users)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

const userDetails = async (req, res) => {
    try {
        const user = await UserData.findById(req.params.id)
        res.json(user)
        console.log(user)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await UserData.findByIdAndUpdate(req.params.id)
        user.Name = req.body.Name;
        user.Phone = req.body.Phone;
        user.Address = req.body.Address;
        user.save();
        res.send('User Updated Successfully')

    }
    catch (error) {
        res.send("Internal Server Error")
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserData.findByIdAndDelete(req.params.id)
        user.save()
        res.send('Deleted')
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    add, usersDetails, userDetails, updateUser, deleteUser
}