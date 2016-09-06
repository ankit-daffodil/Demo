var mongoose = require('mongoose');
var schema = mongoose.Schema;
var contactInformationSchema = new schema({
    PhoneNO: { type: String }
}, { collection: "contactInformation" });


module.exports = mongoose.model('contactInformation', contactInformationSchema);
	
