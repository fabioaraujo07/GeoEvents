var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')
var authController = require('../controllers/authController')

router.get('/add-user', authController.verifyAuth, usersController.createUserGet)
router.post('/', authController.verifyAuth, usersController.createUserPost)

router.get('/', authController.verifyAuth, usersController.showAll)
router.get('/:id', authController.verifyAuth, usersController.showUser)

router.get('/edit-user/:id', authController.verifyAuth, usersController.updateUserGet)
router.post('/edit-user/:id', authController.verifyAuth, usersController.updateUserPost)

router.post('/:id', authController.verifyAuth, usersController.deleteUser)


module.exports = router;
