const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
               throw new Error('Email is invalid') 
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be a positive number.")
            }
        }
    },
    password: {
        required: true,
        trim: true,
        minlength: 7,
        type: String,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("passwordd should not be included")
            }
        }
    }
})

module.exports = User