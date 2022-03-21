const { Router } = require("express")
const express = require("express")
const router = express.Router()
const UserDataController = require('../Controllers/UserDataController')

router.post('/add', UserDataController.add)
router.get('/get', UserDataController.usersDetails)
router.get('/get/:id', UserDataController.userDetails)
router.put('/update/:id', UserDataController.updateUser)
router.delete('/delete/:id', UserDataController.deleteUser)


module.exports = router