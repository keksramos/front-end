/**
first_name: "Giustina"
last_name: "Briton"
email: "gbritonj@theguardian.com"
gender: "Female"
password": kP7@jBg"CbeNy>>b"
 */

const { Schema, model } = require('mongoose')
const bycrypt = require ('bcrypt')

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
        match: [/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, 'email invalid']
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
    versionKey: true,
    statics: {
        encrypPassword: async (password) => {
            const salt = await bycrypt.genSalt(15)
            return await bycrypt.hash(password, salt)
        }
    }
}
)

const Users = model('users', userSchema)

module.exports = Users