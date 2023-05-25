var express = require('express');
var router = express.Router();
var restController = require('../controllers/restController')

router.get('/locals', restController.showLocals);
router.get('/local/:localId', restController.getOneLocal)

router.get('/events', restController.showEvents);
router.get('/event/:eventId', restController.getOneEvent)

router.get('/tickets', restController.showTickets);

router.get('/sales', restController.showSales);
router.get('/sale/:saleId', restController.getOneSale)

router.get('/cartItems', restController.showCartItems);

/*
router.post('/profile', restController.showProfile);
*/

router.param('localId', restController.getLocalId)
router.param('eventId', restController.getEventId)
router.param('saleId', restController.getSaleId)

module.exports = router;