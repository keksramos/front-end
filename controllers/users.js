// const fs = require('fs')
// const Users = '../db/users.json'
const Users = require('../models/users')

// db.users.find({})

module.exports = {
    get: async (req, res) => {
        let users= await Users.find()
        res.status(200).send({msg: 'Success', data:users})
    },

    getById: async (req, res) => {
        let id = req.params.id
        let user = await Users.findOne({_id: id})
        res.status(200).send({msg: 'Success', data:user})
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
}

