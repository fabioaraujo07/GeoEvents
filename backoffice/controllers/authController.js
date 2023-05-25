const jwt = require("jsonwebtoken")
const conf = require('../jwt_secret/config')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const cookie = require('cookie-parser')

authController = {}

authController.getLogin = function(req, res, next){
    res.render('auth/login')
}

authController.postLogin = function(req, res, next){
    
    User.findOne({email: req.body.email})
    .then((user) =>{
        if(user.role == 'Administrador' || user.role == 'Vendedor'){
            bcrypt.compare(req.body.password, user.password)
            .then((result)=>{
                if(result===true){
                    const token = jwt.sign({id:user._id, role:user.role}, conf.secret, {expiresIn:83000})
                    res.cookie('user-token', token, {httpOnly: true, maxAge: 82000 * 1000})
                    res.redirect('/')
                }else {
                    res.redirect('/auth')
                }
            })
            .catch((err) => {
                res.redirect('/auth')
            })
        }else{
            res.redirect('/auth')
        }
    })
    .catch((err) => {
        res.redirect('/auth')
    })
}

authController.getLogout = function(req, res, next){
    res.cookie('user-token', '', {httpOnly:true, maxAge:1})
    res.redirect('/auth')
}

authController.verifyAuth = (req, res, next) => { 
    const token = req.cookies['user-token']; 
    if (token) { 
        jwt.verify(token, conf.secret, (err, decodedToken) => { 
            if (err) res.redirect('/auth'); 
            next(); 
        }); 
    } else { 
        res.redirect('/auth'); 
    } 
}

module.exports = authController