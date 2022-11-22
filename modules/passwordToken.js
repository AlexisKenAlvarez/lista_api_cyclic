const mongoose = require("mongoose")
const Schema = mongoose.Schema

const passTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'userpass',
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now(), expires: 3600
    }
})

module.exports = mongoose.model("passwordToken", passTokenSchema)