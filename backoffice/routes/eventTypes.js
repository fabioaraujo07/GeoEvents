var express = require('express');
var router = express.Router();
var eventTypesController = require('../controllers/eventTypesController')
var authController = require('../controllers/authController')

router.get('/', authController.verifyAuth, eventTypesController.showAll)

router.get('/add-event-type', authController.verifyAuth, eventTypesController.createEventTypeGet)
router.post('/add-event-type', authController.verifyAuth, eventTypesController.createEventTypePost)

router.get('/edit-event-type/:id', authController.verifyAuth, eventTypesController.updateEventTypeGet)
router.post('/edit-event-type/:id', authController.verifyAuth, eventTypesController.updateEventTypePost)

router.post('/', authController.verifyAuth, eventTypesController.deleteEventType)


module.exports = router;
