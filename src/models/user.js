const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type:String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, {versionKey: false})

const User = mongoose.model("user", userSchema, "user")
module.exports = User