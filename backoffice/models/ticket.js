const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    name: {
        type: String
    },
    local: {
        type: String
    },
    event: {
        type: String
    },
    price: {
        type: Number
    }
});

const Ticket = mongoose.model('tickets', ticketSchema);

module.exports = Ticket;