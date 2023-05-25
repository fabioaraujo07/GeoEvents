var express = require('express');
var router = express.Router();
var localsController = require('../controllers/localsController')
var authController = require('../controllers/authController')

router.get('/add-local', authController.verifyAuth, localsController.createLocalGet)
router.post('/', authController.verifyAuth, localsController.createLocalPost)

router.get('/', authController.verifyAuth, localsController.showAll)
router.get('/:id', authController.verifyAuth, localsController.showLocal)

router.get('/edit-local/:id', authController.verifyAuth, localsController.updateLocalGet)
router.post('/edit-local/:id', authController.verifyAuth, localsController.updateLocal)

router.post('/:id', authController.verifyAuth, localsController.deleteLocal)


module.exports = router;
