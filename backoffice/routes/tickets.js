var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/ticketsController')
var authController = require('../controllers/authController')

router.get('/add-ticket', authController.verifyAuth, ticketsController.createTicketGet)
router.post('/add-ticket', authController.verifyAuth, ticketsController.createTicketParams)

router.post('/', authController.verifyAuth, ticketsController.createTicketPost)

router.get('/', authController.verifyAuth, ticketsController.showAll)
router.get('/:id', authController.verifyAuth, ticketsController.showTicket)

router.get('/edit-ticket/:id', authController.verifyAuth, ticketsController.updateTicketGet)
router.post('/edit-ticket/:id', authController.verifyAuth, ticketsController.updateTicketPost)

router.post('/:id', authController.verifyAuth, ticketsController.deleteTicket)



module.exports = router;
