const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/Item.js')
const orderModel = require('./models/Order.js')
const inventoryModel = require('./models/Inventory.js')
const cors = require('cors')
const app = express()

app.use(cors()) // Enable CORS for all routes
app.use(express.json())

// Connect to MongoDB
connectDB()

app.get('/', async (req, res) => {
    try {
        const items = await itemModel.find()
        return res.json({ items: items })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

app.get('/orders', async (req, res) => {
    try {
        const orders = await orderModel.find()
        return res.json({ orders: orders })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

app.get('/inventory', async (req, res) => {
    try {
        const inventory = await inventoryModel.find()
        return res.json({ inventory: inventory })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

app.use(express.json());

app.post('/orders', async (req, res) => {
    try {
        const newOrder = new orderModel(req.body);
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('app is running');
})
