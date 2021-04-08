const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('user', {
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
            if (! validator.isEmail(value)) {
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

const Task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

/* const task1 = new Task({
    description: "buy a ladder",
    completed: false
})

task1.save().then(()=>{
    console.log(task1)
}).catch(()=>{
    console.log("error", error)
}) */