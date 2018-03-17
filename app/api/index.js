
var SwaggerExpress = require('swagger-express-mw')


module.exports = function (app) {
    var config = require('../config')(app)

    var config = {
        appRoot: config.appPath() // required config
    }

    SwaggerExpress.create(config, function (err, swaggerExpress) {
        if (err) { throw err }

        // install middleware
        swaggerExpress.register(app)

        console.log('Swagger API working')
    })
}