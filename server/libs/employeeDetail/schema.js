var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/demo');

var employeeDetailSchema = new schema({
    empId: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    designation: {
        type: String
    }
}, {
    collection: "employeedetail"
});

module.exports = mongoose.model('employeedetail', employeeDetailSchema);
