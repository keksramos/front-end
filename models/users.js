/**
first_name: "Giustina"
last_name: "Briton"
email: "gbritonj@theguardian.com"
gender: "Female"
password": kP7@jBg"CbeNy>>b"
 */

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    date_birth: {
        type: Date,
        require: true
    },
})

const Users = model('users', userSchema)

module.exports = Users