var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TablesSchema = new schema({
    name: {
        type: String
    },
    route: {
        type: String
    },
}, {
    collection: "Tables"
});

module.exports = mongoose.model('Tables', TablesSchema);