const express = require('express')
const Sale = require('../models/sale')
const Local = require('../models/local')
const Event = require('../models/event')
const Ticket = require('../models/ticket')
const User = require('../models/user')
const CartItem = require('../models/cartItem')

const restController = {}

restController.showLocals = function(req, res, next){
    Local.find()
    .then((locals) =>{
        res.json(locals)
    })
    .catch((err) =>{
        next(err)
    })
}

restController.getOneLocal = function(req, res, next){
    res.json(req.local)
}

restController.getLocalId = function(req, res, next){
    Local.findOne({_id: req.params.localId})
    .then((local) =>{
        req.local = local
        next()
    })
    .catch((err) =>{
        next(err)
    })
}

restController.showEvents = function(req, res, next){
    Event.find()
    .then((events) =>{
        res.json(events)
    })
    .catch((err) =>{
        next(err)
    })
}

restController.getOneEvent = function(req, res, next){
    res.json(req.event)
}

restController.getEventId = function(req, res, next){
    Event.findOne({_id: req.params.eventId})
    .then((event) =>{
        req.event = event
        next()
    })
    .catch((err) =>{
        next(err)
    })
}

restController.showTickets = function(req, res, next){
    Ticket.find()
    .then((tickets) =>{
        res.json(tickets)
    })
    .catch((err) =>{
        next(err)
    })
}

restController.showCartItems = function(req, res, next){
    CartItem.find()
    .then((cartItems) =>{
        res.json(cartItems)
    })
    .catch((err) =>{
        next(err)
    })
}

restController.showSales = function(req, res, next){
    Sale.find()
    .then((sales) =>{
        res.json(sales)
    })
    .catch((err) =>{
        next(err)
    })
}

restController.getOneSale = function(req, res, next){
    res.json(req.sale)
}

restController.getSaleId = function(req, res, next){
    Sale.findOne({_id: req.params.saleId})
    .then((sale) =>{
        req.sale = sale
        next()
    })
    .catch((err) =>{
        next(err)
    })
}

module.exports = restController