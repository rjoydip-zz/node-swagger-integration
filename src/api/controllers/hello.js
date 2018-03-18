var util = require('util')

var helpers = require('../../helpers')

module.exports = function (req, res) {    
    if (helpers.isUndefined(req.query.name)) {
        res.status(200).json({
            data: {},
            message: 'Data fetched successfully'
        })
    } else {
        res.status(200).json({
            data: {
                hello: req.query.name,
                message: 'Data fetched successfully'
            }
        })
    }
}