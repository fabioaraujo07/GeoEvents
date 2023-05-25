const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userRoleSchema = new Schema({
    name: {
        type: String
    }
})

const UserRole = mongoose.model('userRoles', userRoleSchema)

module.exports = UserRole