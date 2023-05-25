const express = require('express')
const UserRole = require('../models/userRole')

const userRolesController = {}

userRolesController.showAll = function(req, res, next){
    UserRole.find()
    .then((result) => {
        res.render('userRoles/userRoles', {title: 'User Roles', userRoles: result})
    })
    .catch((err) => {
        res.render('error')
    })
}

userRolesController.createUserRolesGet = function(req, res){
    res.render('userRoles/add-user-role', {title: 'Add User Role'})
}

userRolesController.createUserRolesPost = function(req, res){
    const userRole = new UserRole(req.body)

    userRole.save()
    .then((result) => {
        res.redirect('/admin/user-roles')
    })
    .catch((err) => {
        res.render('error')
    })
}

userRolesController.updateUserRolesGet = function(req, res, next){
    const id = req.params.id
    UserRole.findById(id)
    .then((userRole) =>{
        res.render('userRoles/edit-user-role', {title: 'Edit User Role', userRole: userRole})
    })
    .catch((err) =>{
        res.render('error')
    })
}

userRolesController.updateUserRolesPost = function (req,res){
    console.log(req.body.id)
    UserRole.findByIdAndUpdate(req.body.id, req.body, {new: true})
        .exec()
        .then(editedUserRoles => {
            res.redirect('/admin/user-roles');
        })
        .catch(err => {
            res.render('error');
        });
}

userRolesController.deleteUserRoles = function(req, res, next){
    const id = req.body.id
    console.log(id)
    UserRole.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/admin/user-roles");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = userRolesController