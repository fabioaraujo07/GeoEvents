const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
    clientId: {
        type: String
    },
    buyerFirstName: {
        type: String 
    },
    buyerLastName: {
        type: String 
    },
    date: {
        type: Date
    },
    totalPrice: {
        type: Number
    },
    tickets: {
        type: Array
    }
})

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale