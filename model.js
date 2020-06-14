const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        minValue: 10,
        maxValue: 10
    },
    image: {
        type: String,
        required: true
    }
})

const User = mongoose.model(`User`, userSchema)

module.exports = {
    User
}