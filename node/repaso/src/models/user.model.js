const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        requires: true,
        trim: true,
        minLength: 5,
        maxLength: 100
    },
    email: {
        type: String,
        requires: true,
        trim: true,
        // match: /[^ @ \t\r\n] + @[^ @ \t\r\n] +\.[^ @ \t\r\n]+/,
    },
    password: {
        type: String,
        requires: true,
        trim: true,
        minLength: 5,
        maxLength: 100,
    },
    image: {
        type: String,
        requires: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    createdAt: {
        type: Date,
        default: () => new Date(),
        required: true
    }

})

module.exports = mongoose.model("User", Schema)