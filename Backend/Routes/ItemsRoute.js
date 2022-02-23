const express = require('express');
const router = express.Router()
const ItemsController = require('../controllers/ItemsController')

router.post('/add', ItemsController.addItems)

router.get('/', ItemsController.getItems)

router.get('/:id', ItemsController.singleItem)

router.delete('/delete/:id', ItemsController.deleteItems)



module.exports = router 