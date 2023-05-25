var express = require('express');
var router = express.Router();
var userRolesController = require('../controllers/userRolesController')
var authController = require('../controllers/authController')

router.get('/', authController.verifyAuth, userRolesController.showAll)

router.get('/add-user-role', authController.verifyAuth, userRolesController.createUserRolesGet)
router.post('/add-user-role', authController.verifyAuth, userRolesController.createUserRolesPost)

router.get('/edit-user-role/:id', authController.verifyAuth, userRolesController.updateUserRolesGet)
router.post('/edit-user-role/:id', authController.verifyAuth, userRolesController.updateUserRolesPost)

router.post('/', authController.verifyAuth, userRolesController.deleteUserRoles)

module.exports = router;
