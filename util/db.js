const mongoose = require('mongoose')
const URI = process.env.URI

//ESTE CODIGO ES PARA QUE SE ESTÉ EJECUTANDO CONSTANTEMENTE EL SERVIDOR DE MONGOOSE

mongoose.set('strictQuery', false)

module.exports = {
    conect: () => {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('DB Connected')
            }
        })
    },
    disconnect: (done) => {
        mongoose.disconnect(done)
    }
}