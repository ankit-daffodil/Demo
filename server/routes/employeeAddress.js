var express = require('express');
var router = express.Router();
var api = require('./../libs/Address/api');

router.get('/', function(req, res, next) {
    try {

        var queryString = req.query.params;
        if (queryString) {
            queryString = JSON.parse(queryString);
        } else {
            queryString = {};
        }

        var query = queryString || {};
        var projection = queryString.projection || {};
        var options = queryString.options || {};

        api.find(query, projection, options, function(err, response) {
            try {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(response);
                }
            } catch (e) {
                console.log(e.stack);
            }
        });
    } catch (e) {
        console.log(e.stack);
        res.status(500).send(e);
    }
});


module.exports = router;
