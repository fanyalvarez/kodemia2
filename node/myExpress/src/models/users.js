const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        match: [/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, "Enter a valid email"]
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'buyer']
    }
})

const User = mongoose.model("users", userSchema)

module.exports = User