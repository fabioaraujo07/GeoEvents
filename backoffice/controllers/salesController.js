const express = require('express')
const Sale = require('../models/sale')
const Local = require('../models/local')
const Event = require('../models/event')
const Ticket = require('../models/ticket')
const User = require('../models/user')
const CartItem = require('../models/cartItem')

const salesController = {}

salesController.showAll = function(req, res, next){
    Sale.find()
    .then((sales) => {
        res.render('sales/sales', {title: 'Sales', sales: sales})
    })
    .catch((err) => {
        res.render('error')
    })
}

salesController.localPost = function(req, res, next) {
    const cartItem = new CartItem({
        clientId: req.body.userId
    })
    cartItem.save()
    .then((cartItem) => {
        Local.find()
        .then((locals) => {
            res.render('sales/locals', {title: 'Locals', locals: locals, cartItem: cartItem})
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

salesController.eventPost = function(req, res, next) {
    CartItem.findByIdAndUpdate(req.body.id, {
        local: req.body.local
    })
    .exec()
    .then((cartItem) => {
        Event.find({local: req.body.local})
        .then((events) => {
            console.log(events)
            res.render('sales/events', {title: 'Events', events: events, cartItem: cartItem})
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

salesController.ticketPost = function(req, res, next) {
    CartItem.findByIdAndUpdate(req.body.id, {
        event: req.body.event
    })
    .exec()
    .then((cartItem) => {
        Ticket.find({event: req.body.event})
        .then((tickets) => {
            res.render('sales/tickets', {title: 'Tickets', tickets: tickets, cartItem: cartItem})
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

salesController.saveCartPost = function(req, res, next) {
    Ticket.findById(req.body.ticket)
    .then((ticket) => {
        CartItem.findByIdAndUpdate(req.body.id, {
            quantity: req.body.quantity,
            ticket: ticket.name,
            price: ticket.price * req.body.quantity,
            finished: true
        })
        .exec()
        .then((cartItem) => {
            res.redirect('/admin/users/'+ cartItem.clientId)
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

salesController.deleteCartItem = function(req, res, next) {
    CartItem.findByIdAndRemove(req.body.id)
    .then((result) => {
        res.redirect("/admin/users/"+ req.body.clientId);
    })
    .catch((err) => {
      console.log(err);
    });
}

salesController.finishPurchase = function(req, res, next) {
    CartItem.find({clientId: req.body.clientId})
    .then((cartItems) => {
        const sale = new Sale({
            clientId: req.body.clientId,
            buyerFirstName: req.body.firstName,
            buyerLastName: req.body.lastName,
            totalPrice: req.body.totalPrice,
            date: new Date(),
            tickets: {}
        })

        cartItems.forEach(cartItem => {
            if(cartItem.clientId == req.body.clientId && cartItem.finished == true) {
                sale.tickets.push(cartItem)
            }
        })

        CartItem.deleteMany({clientId: req.body.clientId})
        .then((result) => {console.log(result)})
        .catch((err) => console.log(err))

        sale.save()
        .then((result) => {
            res.redirect('/admin/users/'+ req.body.clientId)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err);
      })
}

salesController.showSale = function(req, res, next) {
    const id = req.params.id
    Sale.findById(id)
    .then((sale) =>{
        res.render('sales/details', {title: 'Sale Details', sale: sale})
    })
    .catch((err) =>{
        res.render('error')
    })
}


module.exports = salesController