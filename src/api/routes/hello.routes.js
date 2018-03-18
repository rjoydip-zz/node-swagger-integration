module.exports = function (prefix, app) {
    app.get(`/${prefix}/hello`, require('../controllers').hello)
}