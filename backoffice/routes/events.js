var express = require('express');
var router = express.Router();
var eventsController = require('../controllers/eventsController')
var authController = require('../controllers/authController')

router.get('/add-event', authController.verifyAuth, eventsController.createEventGet)
router.post('/', authController.verifyAuth, eventsController.createEventPost)

router.get('/', authController.verifyAuth, eventsController.showAll)
router.get('/:id', authController.verifyAuth, eventsController.showEvent)

router.get('/edit-event/:id', authController.verifyAuth, eventsController.updateEventGet)
router.post('/edit-event/:id', authController.verifyAuth, eventsController.updateEventPost)

router.post('/:id', authController.verifyAuth, eventsController.deleteEvent)


module.exports = router;
