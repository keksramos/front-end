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
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    },
    date_birth: {
        type: Date
    },
})

const Users = model('users', userSchema)

module.exports = Users