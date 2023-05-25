var express = require('express');
var router = express.Router();
var localTypesController = require('../controllers/localTypesController')
var authController = require('../controllers/authController')

router.get('/', authController.verifyAuth, localTypesController.showAll)

router.get('/add-local-type', authController.verifyAuth, localTypesController.createLocalTypeGet)
router.post('/add-local-type', authController.verifyAuth, localTypesController.createLocalTypePost)

router.get('/edit-local-type/:id', authController.verifyAuth, localTypesController.updateLocalTypeGet)
router.post('/edit-local-type/:id', authController.verifyAuth, localTypesController.updateLocalTypePost)

router.post('/', authController.verifyAuth, localTypesController.deleteLocalType)


module.exports = router;
