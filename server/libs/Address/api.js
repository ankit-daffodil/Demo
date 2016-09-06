var employeeAddressDB = require("./schema.js");
// console.log("path", employeeDetailDB.schema.paths);
// var util = require("../utils.js");
module.exports = {

    find: function(query, projection, options, callback) {
        try {
            var query = query;
            var projection = projection;
            var options = options;
            employeeAddressDB.find(query, projection, options,function(err, result) {
                try {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result);
                    }
                } catch (e) {
                    console.log(e.stack);
                    return callback(e, null);
                }
            })
        } catch (e) {
            console.log(e.stack);
            return callback(e, null);
        }
    },
}
