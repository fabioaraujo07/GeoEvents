const express = require('express')
const Ticket = require('../models/ticket')
const { render } = require('ejs')
const Local = require('../models/local')
const Event = require('../models/event')

const ticketsController = {}

ticketsController.showAll = function(req, res, next){
    Ticket.find()
    .then((result) => {
        res.render('tickets/tickets', {title: 'All Tickets', tickets: result})
    })
    .catch((err) => {
        res.render('error')
    })
}

ticketsController.createTicketGet = function(req, res, next){
    Event.findById(req.body.id)
    .then((event) => {
        Ticket.find()
        .then((ticket) => {
            res.render('tickets/add-ticket', {title: 'Add ticket', event: event, ticket: ticket})
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

ticketsController.createTicketPost = function(req, res, next){
    const ticket = new Ticket(req.body)

    ticket.save()
    .then((result) => {
        res.redirect('/admin/events/'+ req.body.id)
    })
    .catch((err) => {
        res.render('error')
    })
}


ticketsController.updateTicketGet = function(req, res, next){
    const id = req.params.id
    Ticket.findById(id)
    .then((ticket) => {
        res.render('tickets/edit-ticket', {title: 'Edit Ticket', ticket: ticket})
    })
    .catch((err) => {
        res.render('error')
    })
}

ticketsController.createTicketParams = function(req, res, next){
    const id = req.body.id
    console.log(id)
    Event.findById(id)
    .then((event) => {
        res.render('tickets/add-ticket', {title: 'Add Ticket', event: event})
    })
    .catch((err) => {
        res.render('error')
    })
}

ticketsController.showTicket = function(req, res, next){
    const id = req.params.id
    Ticket.findById(id)
    .then((result) => {
        res.render('tickets/details', {title: 'Ticket Details', ticket: result})
    })
    .catch((err) => {
        res.render('error')
    })
}

ticketsController.deleteTicket = function(req, res, next){
    const id = req.body.id
    Ticket.findByIdAndRemove(id)
    .then((result) => {
        res.redirect('/admin/tickets');
    })
    .catch((err) => {
        console.log(err)
    })
}

ticketsController.updateTicketPost = function(req, res, next){
    Ticket.findByIdAndUpdate(req.body.id, req.body, {new: true})
    .exec()
    .then(editedTicket => {
        res.redirect('/admin/tickets/'+req.body.id)
    })
    .catch(err => {
        res.render('error')
    })
}


module.exports = ticketsController