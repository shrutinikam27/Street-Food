const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: Number,
    vendor: String,
    Date: Date,
    Items: Number,
    Amount: Number,
    Status: String,
    Action: String,
});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;
