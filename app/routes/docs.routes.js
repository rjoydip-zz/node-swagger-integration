
module.exports = function(app) {

    /* GET Docs page. */
    app.get('/docs', function (req, res, next) {
        res.render('index', { title: 'Docs' })
    })

}