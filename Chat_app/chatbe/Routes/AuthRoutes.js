const express = require("express")
const router = express.Router()
const AuthController = require('../Controllers/AuthController')

router.post('/signup', AuthController.register)
router.post('/login', AuthController.login)
router.get('/get', AuthController.userDetail)
router.get('/', AuthController.getUsers)
router.get("/friends/:userId", AuthController.getFriends)
router.put("/:id/follow", AuthController.follow)
router.put("/profileUpdate/:id", AuthController.updateProfile)



module.exports = router