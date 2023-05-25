const express = require('express')
const User = require('../models/user')
const UserRole = require('../models/userRole')
const CartItem = require('../models/cartItem')
const Sale = require('../models/sale')
const bcrypt = require('bcrypt')
const { render } = require('ejs')

const usersController = {}

usersController.showAll = function(req, res, next){
    User.find()
    .then((users) => {
        res.render('users/users', {title: 'Users', users: users})
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.createUserGet = function(req, res, next){
    UserRole.find()
    .then((userRoles) => {
        res.render('users/add-user', {title: 'Add User', userRoles: userRoles})
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.createUserPost = async function(req, res, next){
    const salt = await bcrypt.genSalt();
    const pass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: pass,
        dateOfBirth: req.body.dateOfBirth,
        contact: req.body.contact,
        role: req.body.role
    })

    user.save()
    .then((result) => {
        res.redirect('/admin/users')
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.updateUserGet = function(req, res, next){
    const id = req.params.id
    User.findById(id)
    .then((user) => {
        UserRole.find()
        .then((userRoles) => {
            const date = new Date();
            const formattedDate = date.toISOString().substr(0, 10);
            res.render('users/edit-user', {title: 'Edit User', user: user, date: formattedDate, userRoles: userRoles})
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.showUser = function(req, res, next){
    const id = req.params.id
    User.findById(id)
    .then((user) => {
        CartItem.find()
        .then((cartItems) => {
            Sale.find()
            .then((sales) => {
                res.render('users/details', {title: 'User Detail', user: user, cartItems: cartItems, sales: sales})
            })
            .catch((err) => {
                res.render('error')
            })
        })
        .catch((err) => {
            res.render('error')
        })
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.deleteUser = function(req, res, next){
    const id = req.body.id
    console.log(id)
    User.findByIdAndRemove(id)
    .then((result) => {
        res.redirect('/admin/users')
    })
    .catch((err) => {
        res.render('error')
    })
}

usersController.updateUserPost = async function(req, res, next){
    const salt = await bcrypt.genSalt();
    const pass = await bcrypt.hash(req.body.password, salt);
    
    User.findByIdAndUpdate(req.body.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: pass,
        dateOfBirth: req.body.dateOfBirth,
        contact: req.body.contact,
        role: req.body.role 
    }, {new: true})
    .exec()
    .then(editedUser => {
        res.redirect('/admin/users/'+req.body.id)
    })
    .catch((err) =>{
        res.render('error')
    })
}

module.exports = usersController