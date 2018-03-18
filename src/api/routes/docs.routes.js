var swaggerUi = require('swagger-ui-express')
var YAML = require('yamljs')

const swaggerDocument = YAML.load('./src/api/swagger/swagger.yaml')

module.exports = function (prefix, app) {
    app.use('/', swaggerUi.serve)
    app.get(
        `/${prefix}/docs`,
        swaggerUi.setup(swaggerDocument, {
            swaggerUrl: 'http://127.0.0.1:3000'
        })
    )
}