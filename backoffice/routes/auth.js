var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController')

router.get('/', authController.getLogin)

router.post('/login', authController.postLogin)

router.get('/logout', authController.getLogout)

module.exports = router;