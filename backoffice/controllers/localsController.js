const express = require('express')
const LocalType = require('../models/localType')
const Local = require('../models/local')
const Event = require('../models/event')
const { render } = require('ejs')

const localsController = {}

localsController.showAll = function(req, res, next){
    Local.find()
    .then((result) => {
        res.render('locals/locals', {title: 'Locals', locals: result})
    })
    .catch((err) =>{
        res.render('error')
    })
}

localsController.createLocalGet = function(req, res, next){
    LocalType.find()
    .then((localTypes) => {
        res.render('locals/add-local', {title: 'Add Local', localTypes: localTypes})
    })
    .catch((err) =>{
        res.render('error')
    })
}

localsController.createLocalPost = function(req, res, next){
    const local = new Local(req.body)

    local.save()
    .then((result) => {
        res.redirect('/admin/locals')
    })
    .catch((err) => {
        res.render('error')
    })
}

localsController.updateLocalGet = function(req, res, next){
    const id = req.params.id
    Local.findById(id)
    .then((local) =>{
        LocalType.find()
        .then((localTypes) => {
            res.render('locals/edit-local', {title: 'Edit Local', local: local, localTypes: localTypes})
        })
        .catch((err) =>{
            res.render('error')
        })
    })
    .catch((err) =>{
        res.render('error')
    })
}

localsController.showLocal = function(req, res, next){
    const id = req.params.id
    Local.findById(id)
    .then((local) =>{
        Event.find()
        .then((events) => {
            res.render('locals/details', {title: 'Local Details', local: local, events: events})
        })
        .catch((err) =>{
            res.render('error')
        })
    })
    .catch((err) =>{
        res.render('error')
    })
}

localsController.deleteLocal = function(req, res, next){
    const id = req.body.id

    Local.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/admin/locals");
    })
    .catch((err) => {
      console.log(err);
    });
};

localsController.updateLocal = function (req,res){
    Local.findByIdAndUpdate(req.body.id, req.body, {new: true})
        .exec()
        .then(editedLocal => {
            res.redirect('/admin/locals/'+req.body.id);
        })
        .catch(err => {
            res.render('error');
        });
}

module.exports = localsController