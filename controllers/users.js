// const fs = require('fs')
// const Users = '../db/users.json'
const Users = require('../models/users')
const auth = require ('../middlewares/auth')

// db.users.find({})

module.exports = {
    get: async (req, res) => {
        let users= await Users.find()
        return res.status(200).send({msg: 'Success', data:users})
    },

    getById: async (req, res) => {
        let id = req.params.id
        let user = await Users.findOne({_id: id})
        if(!user){
            return res.status(404).send({msg: 'User not found'})
        }
        return res.status(200).send({msg: 'Success', data:user})
    },
    post: async (req, res, next) => {
        try {
            req.body.password = await Users.encrypPassword(req.body.password)
            let user = await Users.create(req.body)
            if (!user) {
                return res.status(502).send({msg: 'User not created'})
            }
            await user.save()
    
            return res.status(201).send({msg: 'User successfuly created', data: user})
        } catch (error){
            next(error, req, res)
            // res.status(500).send({msg: error})
        }
    },
    put: async (req, res) => {
        let id = req.params.id
        let user = await Users.findOneAndUpdate(id, req.body)
        if (!user) {
            return res.status(404).send({msg: 'User not found'})
        }
        return res.status(200).send({msg: 'User successfuly updated', data:user})
    },
    delete: async (req, res) => {
        let id = req.params.id
        let user = await Users.deleteOne(id)
        if (!user){
            return res.status(404).send({msg: 'User not found'})
        }
        return res.status(200).send({msg: 'User deleted successfully'})
    },
    login: async (req, res) => {
        /* All your base are belong to us!!! */
        const {email, password} = req.body
        let user = await Users.findOne({email: email})
        if (!user){
            return res.status(404).send({msg: 'user not found'})
        }
        let validPassword = await Users.comparePassword(password, user.password)
        if(!validPassword){
            return res.status(401).send({msg:'incorrect password'})
        }
        // generate token 
        let token = auth.generateToken(user)
        return res.status(200).send({msg: 'success', data:token})
    }
}

// users.findById(req.param.id)
// res.status(200).send({msg: "user", data:{id: req.body}})
// getAll: async function name(req, res){
//     res.status(200).send({msg: "users", data: req.body })
// },
// post: async(req, res) => {
//     fs.writeFile(Users, JSON.stringify(newUsers), (err) => {
//         if(err) res.status(404).send({msg: 'Unexpected error', error: err})
//         res.status(201).send({msg: 'user created', data:req.body})
//     });
// },
// put: async (req, res) => {
//     let id = req.params.id

//     fs.readFile(Users, 'utf-8', (err, usersData) => {
//         if (err) res.status(404).send({msg: 'Users db not found', error: err})
//         let users = JSON.parse(usersData)
//         // let userById = usersData.find((user) => user.id == id)
//         let newUsers = []
//         users.forEach(user => {
//             if (user.id != id){
//                 newUsers.push(user)
//             }else {
//                 newUsers.push(req.body)
//             }
//         });
//         fs.writeFile(Users, JSON.stringify(newUsers), (err) => {
//             if (err) res.status(404).send({msg: 'Users db not found', error: err})
//             res.status(201).send({msg: 'user updated', data:req.body})
//         });
//     })     
// },
// delete: async(req, res) => {
//     let id = req.params.id

//     fs.readFile(Users, 'utf-8', (err, usersData) => {
//         if (err) res.status(404).send({msg: 'User db not found', error: err})
//         let users = JSON.parse(usersData)
//         let userById = usersData.find((user) => user.id == id)
//         users.forEach( user => {
//             if (user.id == id){
//                 fs.unlink(Users, (err, usersData) => {
//                     if (err) res.status(404).send({msg: 'User db not found', error:err})
//                     res.status(201).send({msg: 'User deleted'})
//                 })
//             }
//         })
//     })
// }
