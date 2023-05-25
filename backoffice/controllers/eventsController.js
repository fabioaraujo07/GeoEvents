const express = require('express')
const Event = require('../models/event')
const EventType = require('../models/eventType')
const Local = require('../models/local')
const Ticket = require('../models/ticket')

const eventsController = {}

eventsController.showAll = function(req, res, next){
    Event.find()
    .then((result) => {
        res.render('events/events', {title: 'Events', events: result})
    })
    .catch((err) =>{
        res.render('error')
    })
}

eventsController.createEventGet = function(req, res, next){
    EventType.find()
        .then((eventTypes) => {
            Local.find()
            .then((locals) => {
                res.render('events/add-event', {title: 'Add Event', eventTypes: eventTypes, locals: locals})
            })
            .catch((err) => {
                res.render('error')
            })
        })
        .catch((err) => {
            res.render('error')
        })
    
}

eventsController.createEventPost = function(req, res, next){
    const event = new Event(req.body)

    event.save()
    .then((result) => {
        res.redirect('/admin/events')
    })
    .catch((err) => {
        res.render('error')
    })
}

eventsController.updateEventGet = function(req, res, next){
    const id = req.params.id
    Event.findById(id)
    .then((event) =>{
        EventType.find()
        .then((eventTypes) => {
            Local.find()
            .then((locals) => {
                const date = new Date();
                const formattedDate = date.toISOString().substr(0, 10);
                res.render('events/edit-event', {title: 'Edit Event', event: event, eventTypes: eventTypes, locals: locals, date: formattedDate})
            })
            .catch((err) => {
                res.render('error')
            })
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) =>{
        res.render('error')
    })
}

eventsController.showEvent = function(req, res, next){
    const id = req.params.id
    Event.findById(id)
    .then((result) =>{
        Ticket.find()
        .then((tickets) => {
            res.render('events/details', {title: 'Event Details', event: result, tickets: tickets})
        })
        .catch((err) =>{
            res.render('error')
        })
    })
    .catch((err) =>{
        res.render('error')
    })
}

eventsController.deleteEvent = function(req, res, next){
    const id = req.body.id
    console.log(id)
    Event.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/admin/events");
    })
    .catch((err) => {
      console.log(err);
    });
};

eventsController.updateEventPost = function (req,res){
    Event.findByIdAndUpdate(req.body.id, req.body, {new: true})
        .exec()
        .then(editedEvent => {
            res.redirect('/admin/events/'+ req.body.id);
        })
        .catch(err => {
            res.render('error');
        });
}

module.exports = eventsController