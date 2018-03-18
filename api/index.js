var express = require('express')
var router = express.Router()

var apiCtrl = require('./controllers')

router.get('/hello', apiCtrl.hello)

module.exports = router