var tablesDB = require("./schema.js");

module.exports = {

    find: function(query, projection, options, callback) {

        try {

            var query = query;
            var projection = projection;
            var options = options;

            tablesDB.find(query, projection, options, function(err, result) {
                try {
                    return callback(err, result);
                } catch (e) {
                    return callback(e, null);
                }
            });

        } catch (e) {
            return callback(e, null);
        }
    },

    add: function(categoryObj, callback) {

        try {

            tablesDB.create(categoryObj, function(err, result) {
                try {
                    return callback(err, result);
                } catch (e) {
                    return callback(e, null);
                }
            });

        } catch (e) {
            return callback(e, null);
        }
    }
}