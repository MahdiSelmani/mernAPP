const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the DATABASE')
    } catch (error) {
        console.log('DATABASE not connected')
    }
}
module.exports = connectDB; 