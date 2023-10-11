const fs = require('fs')
const Users = '../db/users.json'


module.exports = {
    get: async function name(req, res){
        let id = req.params.id

        users.findById(req.param.id)
        res.status(200).send({msg: "user", data:{id: req.body}})
    },
    getAll: async function name(req, res){
        res.status(200).send({msg: "users", data: req.body })
    },
    post: async(req, res) => {
        fs.writeFile(Users, JSON.stringify(newUsers), (err) => {
            if(err) res.status(404).send({msg: 'Unexpected error', error: err})
            res.status(201).send({msg: 'user created', data:req.body})
        });
    },
    put: async (req, res) => {
        let id = req.params.id

        fs.readFile(Users, 'utf-8', (err, usersData) => {
            if (err) res.status(404).send({msg: 'Users db not found', error: err})
            let users = JSON.parse(usersData)
            // let userById = usersData.find((user) => user.id == id)
            let newUsers = []
            users.forEach(user => {
                if (user.id != id){
                    newUsers.push(user)
                }else {
                    newUsers.push(req.body)
                }
            });
            fs.writeFile(Users, JSON.stringify(newUsers), (err) => {
                if (err) res.status(404).send({msg: 'Users db not found', error: err})
                res.status(201).send({msg: 'user updated', data:req.body})
            });
        })     
    },
    delete: async(req, res) => {
        let id = req.params.id

        fs.readFile(Users, 'utf-8', (err, usersData) => {
            if (err) res.status(404).send({msg: 'User db not found', error: err})
            let users = JSON.parse(usersData)
            let userById = usersData.find((user) => user.id == id)
            users.forEach( user => {
                if (user.id == id){
                    fs.unlink(Users, (err, usersData) => {
                        if (err) res.status(404).send({msg: 'User db not found', error:err})
                        res.status(201).send({msg: 'User deleted'})
                    })
                }
            })
        })
    }
}



// fs.readFile(Users, JSON.stringify(newUsers), (err, data) => {
//     if (err) throw err;
//     console.log(data + "1");
// });


/*fs.appendFile('./test.txt', ' Koders!', (err) => {
    if (err) throw err;
    console.log('Archivo editado Satisfactoriamente');
});*/

/*fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data + "2");
});*/

/*fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data = data + new Date()
    fs.writeFile('./files/test.txt', data.toString(), (err) => {
        if (err) throw err;
        console.log('Archivo creado Satisfactoriamente');
    });
});*/


