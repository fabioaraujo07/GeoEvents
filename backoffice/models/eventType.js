const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventTypeSchema = new Schema({
    name:{
        type: String
    }
})

const EventType = mongoose.model('eventTypes', eventTypeSchema)

module.exports = EventType