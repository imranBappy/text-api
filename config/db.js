const mongoose = require('mongoose');
// mongodb+srv://imrans-todo:vBMHZcYyOIJDMJW6@cluster0.qxeleyw.mongodb.net/blog
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect('mongodb+srv://imrans-todo:vBMHZcYyOIJDMJW6@cluster0.qxeleyw.mongodb.net/blog1')
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;