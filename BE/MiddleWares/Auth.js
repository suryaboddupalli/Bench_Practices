const JWT = require('jsonwebtoken')
const UserData = require("../Model/userSchema")

exports.isAuth = (req, res, next) => {
    const isvalid = verifyToken(req)

    if (!isvalid) {
        return tes.json()
    }
    req.user = isvalid
    const { Name, email, phone } = isvalid
    res.json({ user: { Name, email, phone } })
}

const verifyToken = (req) => {
    if (!req.cookies.auth_token) {
        return false
    }
    const decode = JWT.verify(req.cookies.auth_token, "surya")
    const user = await UserData.findOne({ _id: decode._id })
    if (!user) {
        return false
    }
    return user
}