module.exports = function(prefix, app) {
    require('./docs.routes')(prefix, app)
    require('./hello.routes')(prefix, app)  
}