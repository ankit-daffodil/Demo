var mongoose = require('mongoose');
var schema = mongoose.Schema;
var employeeAddressSchema = new schema({
    Address: { type: String }
}, { collection: "employeeaddress" });


module.exports = mongoose.model('employeeaddress', employeeAddressSchema);


