const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartItemSchema = new Schema({
    clientId: {
        type: String
    },
    local: {
        type: String
    },
    event: {
        type: String
    },
    ticket: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    finished: {
        type: Boolean
    }
})

const CartItem = mongoose.model('cartItems', cartItemSchema)

module.exports = CartItem