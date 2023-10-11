const express = require('express')
const app = express()
const port = 3000

/** Directories */
const routes = require('./routes/index')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const docs = require('./doc/index')
const swaggerSpec = swaggerJSDoc(docs)

/** Middlewares */
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

/** Routes */
app.use(routes)


/** Server - Bucle que va a estar escuchando constantemente */
app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

