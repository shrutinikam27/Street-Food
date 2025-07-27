const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    stock: Number,
    unit: String,
    alert: Boolean
});

const inventoryModel = mongoose.model('Inventory', inventorySchema);
module.exports = inventoryModel;
