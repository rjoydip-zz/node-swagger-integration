var path = require('path')
var dir = require('node-dir')

module.exports = function (app) {
    return {
        root: app.get('root'),
        getPort: app.get('port'),
        appPath: function () {
            return path.join(this.root, 'app')
        },
        dirFiles: function (dirname) {
            return dir.promiseFiles(dirname)
                .then(function (files) {
                    return new Promise(function (resolve, reject) {
                        resolve(
                            files = files.filter(function (file) {
                                return !file.match('index.js')
                            })
                        )
                    })
                }).catch(function(err) {
                    return new Promise(function(resolve, reject) {
                        reject(err)
                    })
                })
        }
    }
}