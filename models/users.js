/**
first_name: "Giustina"
last_name: "Briton"
email: "gbritonj@theguardian.com"
gender: "Female"
password": kP7@jBg"CbeNy>>b"
 */

const { Schema, model } = require('mongoose')
const bycrypt = require ('bcrypt')
const uniqueValidator= require('mongoose-unique-validator')

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
        require: true,
        match: [/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, 'email invalid'],
        uniqueValidator: true
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: '{VALUE} is not a valid gender'
        }
    },
    password: {
        type: String,
        require: true
    },
    date_birth: {
        type: Date,
        require: true
    },
},
{
    timestamps: true,
    statics: {
        encrypPassword: async (password) => {
            if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)){
                throw new Error ("password not valid")
            }
            const salt = await bycrypt.genSalt(15)
            return await bycrypt.hash(password, salt)
        },
        comparePassword: async (password, hash) => {
            return await bycrypt.compare(password, hash)
        }
    }
}
)

userSchema.plugin(uniqueValidator)
const Users = model('users', userSchema)

module.exports = Users