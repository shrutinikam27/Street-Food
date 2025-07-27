const mongoose = require('mongoose');
const connectDB = require('./db.js');
const itemModel = require('./models/Item.js');

const seedItems = [
    { name: 'Item 1', description: 'Description for Item 1' },
    { name: 'Item 2', description: 'Description for Item 2' },
    { name: 'Item 3', description: 'Description for Item 3' },
];

const seedDatabase = async () => {
    try {
        await connectDB();
        await itemModel.deleteMany({});
        await itemModel.insertMany(seedItems);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
