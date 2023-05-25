const mongoose = require('mongoose')
const Schema = mongoose.Schema

const localTypeSchema = new Schema({
    name:{
        type: String
    }
})

const LocalType = mongoose.model('localTypes', localTypeSchema)

module.exports = LocalType