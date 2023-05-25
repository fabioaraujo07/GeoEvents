const express = require('express')
const LocalType = require('../models/localType')


const localTypesController = {}

localTypesController.showAll = function(req, res, next){
    LocalType.find()
    .then((result) => {
        res.render('localTypes/local-types', {title: 'Local Types', localTypes: result})
    })
    .catch((err) => {
        res.render('error')
    })
}

localTypesController.createLocalTypeGet = function(req, res){
    res.render('localTypes/add-local-type', {title: 'Add Local Types'})
}

localTypesController.createLocalTypePost = function(req, res){
    const localType = new LocalType(req.body)

    localType.save()
    .then((result) => {
        res.redirect('/admin/local-types')
    })
    .catch((err) => {
        res.render('error')
    })
}

localTypesController.updateLocalTypeGet = function(req, res, next){
    const id = req.params.id
    LocalType.findById(id)
    .then((localType) =>{
        res.render('localTypes/edit-local-type', {title: 'Edit Local Type', localType: localType})
    })
    .catch((err) =>{
        res.render('error')
    })
}

localTypesController.updateLocalTypePost = function (req,res){
    console.log(req.body.id)
    LocalType.findByIdAndUpdate(req.body.id, req.body, {new: true})
        .exec()
        .then(editedLocalType => {
            res.redirect('/admin/local-types');
        })
        .catch(err => {
            res.render('error');
        });
}

localTypesController.deleteLocalType = function(req, res, next){
    const id = req.body.id
    console.log(id)
    LocalType.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/admin/local-types");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = localTypesController