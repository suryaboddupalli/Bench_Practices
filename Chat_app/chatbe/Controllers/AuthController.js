const Friends = require('../Model/FriendsSchema')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { Name, Email, Phone, Password } = req.body;
        console.log(req.body.Email)
        if (await Friends.findOne({ Email: Email })) {
            res.send('User already exist')
            console.log(Email)
        }
        else {
            const newuser = new Friends({
                Name, Email, Phone, Password
            })
            newuser.save();
            res.send('User Registered Successfully')
        }
    }
    catch (error) {
        res.send('Internal Server Error')
    }
}

const userDetail = async (req, res) => {
    try {
        const user = await Friends.find()
        res.json(user)
        console.log(user)
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

const getUsers = async (req, res) => {
    const userId = req.query.userId;
    const Email = req.query.Email;
    try {
        const user = userId
            ? await Friends.findById(userId)
            : await Friends.findOne({ Email: Email });
        const { password, updatedAt, ...other } = user._doc;
        res.json(other);
    } catch (err) {
        res.json(err);
    }
}

const getFriends = async (req, res) => {
    try {
        const user = await Friends.findById(req.params.userId);
        const friends = await Promise.all(
            user.Following.map((friendId) => {
                return Friends.findById(friendId)
            })
        );
        console.log(friends)
        let friendList = []
        friends.map((friend) => {
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
            const user = await Friends.findById(req.params.id);
            console.log(user.Followers)
            const currentUser = await Friends.findById(req.body.userId);
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


module.exports = {
    register, login, userDetail, getUsers, getFriends, follow
}