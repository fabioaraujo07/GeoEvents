const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    contact: {
        type: Number
    },
    role: {
        type: String
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User