const basic = require('./basic')
const servers = require('./servers')
const urls = require('./urls')
const components = require('./components')

module.exports = {
    swaggerDefinition: {
        ...basic,
        ...servers,
        // ...components,
    },
    apis: urls,
}