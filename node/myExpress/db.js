const mongoose = require('mongoose')

async function connectDB() {

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log('>>>DB CONNECT')

    } catch (error) {
        console.log('>>> DB NO CONECT')
        console.log(error)
    }
}

module.exports = connectDB
