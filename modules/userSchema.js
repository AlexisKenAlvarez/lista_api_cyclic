const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number,
        default: 1
    },
    activeTask: [{
        taskName: String,
        taskSubject: String,
        deadline: String,
        status: String,
        dateCreated: String
    
    }],
    finishedTask: [{
        taskName: String,
        taskSubject: String,
        deadline: String,
        status: String,
        dateCreated: String
    }]
})

const users = new mongoose.model("users", userSchema)
module.exports = users