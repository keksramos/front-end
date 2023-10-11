/**
first_name: "Giustina"
last_name: "Briton"
email: "gbritonj@theguardian.com"
gender: "Female"
password": kP7@jBg"CbeNy>>b"
 */

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    password: String,
    date_birth: Date,
})

const Users = model('users', userSchema)

module.exports = Users