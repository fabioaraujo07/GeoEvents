const express = require('express')
const EventType = require('../models/eventType')


const eventTypesController = {}

eventTypesController.showAll = function(req, res, next){
    EventType.find()
    .then((result) => {
        res.render('eventTypes/event-types', {title: 'Event Types', eventTypes: result})
    })
    .catch((err) => {
        res.render('error')
    })
}

eventTypesController.createEventTypeGet = function(req, res){
    res.render('eventTypes/add-event-type', {title: 'Add Event Type'})
}

eventTypesController.createEventTypePost = function(req, res){
    const eventType = new EventType(req.body)

    eventType.save()
    .then((result) => {
        res.redirect('/admin/event-types')
    })
    .catch((err) => {
        res.render('error')
    })
}

eventTypesController.updateEventTypeGet = function(req, res, next){
    const id = req.params.id
    EventType.findById(id)
    .then((eventType) =>{
        res.render('eventTypes/edit-event-type', {title: 'Edit Event Type', eventType: eventType})
    })
    .catch((err) =>{
        res.render('error')
    })
}

eventTypesController.updateEventTypePost = function (req,res){
    console.log(req.body.id)
    EventType.findByIdAndUpdate(req.body.id, req.body, {new: true})
        .exec()
        .then(editedEventType => {
            res.redirect('/admin/event-types');
        })
        .catch(err => {
            res.render('error');
        });
}

eventTypesController.deleteEventType = function(req, res, next){
    const id = req.body.id
    console.log(id)
    EventType.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/admin/event-types");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = eventTypesController