const express = require("express")
const router = express.Router()
const UserController = require('../Controllers/UserController')


router.get('/get', UserController.userDetail)
router.get('/', UserController.getUsers)
// router.get("/friends/:userId", UserController.getFriends)
router.put("/:id/follow", UserController.follow)
router.put("/profileUpdate/:id", UserController.updateProfile)



module.exports = router