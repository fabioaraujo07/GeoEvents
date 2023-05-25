var express = require('express');
var router = express.Router();
var salesController = require('../controllers/salesController')
var authController = require('../controllers/authController')

router.get('/', authController.verifyAuth, salesController.showAll)

router.post('/locals', authController.verifyAuth, salesController.localPost)

router.post('/events', authController.verifyAuth, salesController.eventPost)

router.post('/tickets', authController.verifyAuth, salesController.ticketPost)

router.post('/save-cart', authController.verifyAuth, salesController.saveCartPost)

router.post('/delete', authController.verifyAuth, salesController.deleteCartItem)

router.post('/finish-purchase', authController.verifyAuth, salesController.finishPurchase)

router.get('/:id', authController.verifyAuth, salesController.showSale)

module.exports = router;
