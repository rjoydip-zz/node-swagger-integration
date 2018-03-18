var path = require('path')
var slash = require('slash')

module.exports = function (app) {
  var config = require('../../config')(app)
  
  require('./main.routes')(app)

}
