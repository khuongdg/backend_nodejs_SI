require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.MONGODB_URI).on('open', ()=> {
    console.log('MongoDB connected');
}).on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = connection;