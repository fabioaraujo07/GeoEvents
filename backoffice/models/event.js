const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    local:{
        type: String
    },
    eventType:{ 
        type: String
    },
    capacity: {
        type: Number
    },
    date: {
        type: Date
    }
})

const Event = mongoose.model('events', eventSchema)

module.exports = Event