const mongoose = require('mongoose')
const Schema = mongoose.Schema

const localSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    localType:{
        type: String
    },
    capacity:{
        type: Number
    },
    country:{
        type: String
    },
    city:{
        type: String
    },
    address:{
        type: String
    }
})

const Local = mongoose.model('locals', localSchema)

module.exports = Local