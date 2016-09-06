var mongoose = require('mongoose');
var schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/learningApp');
// mongoose.connect('mongodb://localhost/demo');
var employeeQualificationSchema = new schema({
    Degreee: { type: String },
}, { collection: "employeequalification" });


module.exports = mongoose.model('employeequalification', employeeQualificationSchema);

