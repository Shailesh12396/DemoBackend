const mongoose = require('mongoose')
const DB_NAME = require('../constants')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB connected: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("DB connection error", error)
    }
}

module.exports = connectDB;