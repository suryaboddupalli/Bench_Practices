const Customers = require('../Model/CustomerSchema')


const userDetail = async (req, res) => {
    try {
        const user = await Customers.find()
        res.json(user)
        console.log(user)
    } catch (error) {
        res.send("Internal Server Error")
    }
}

const getUsers = async (req, res) => {
    const userId = req.query.userId;
    const Email = req.query.Email;
    try {
        const user = userId
            ? await Customers.findById(userId)
            : await Customers.findOne({ Email: Email });
        const { password, updatedAt, ...other } = user._doc;
        res.json(other);
    } catch (err) {
        res.json(err);
    }
}

const getFriends = async (req, res) => {
    try {
        const user = await Customers.findById(req.params.userId);
        const Customers = await Promise.all(
            user.Following.map((friendId) => {
                return Customers.findById(friendId)
            })
        );
        console.log(Customers)
        let friendList = []
        Customers.map((friend) => {
            const { _id, Name, Profile } = friend;
            friendList.push({ _id, Name, Profile });
        });
        res.json(friendList)
    } catch (err) {
        res.json(err);
    }
};

const follow = async (req, res) => {
    console.log(req.body)
    if (req.body.userId !== req.params.id) {
        try {
            const user = await Customers.findById(req.params.id);
            console.log(user.Followers)
            const currentUser = await Customers.findById(req.body.userId);
            console.log(currentUser)
            if (!user.Followers.includes(req.body.userId)) {
                console.log("true")
                await user.updateOne({ $push: { Followers: req.body.userId } });
                await currentUser.updateOne({ $push: { Following: req.params.id } });
                res.json("user has been followed");
            } else {
                res.json("you allready follow this user");
            }
        } catch (err) {
            res.json(err);
        }
    } else {
        res.json("you cant follow yourself");
    }
}

const updateProfile = async (req, res) => {
    try {
        const data = await Customers.findByIdAndUpdate(req.params.id)
        data.Profile = req.body.Profile
        const update = data.save()
        console.log(update)
        res.send("updated successfully")
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    userDetail, getUsers, getFriends, follow, updateProfile
}