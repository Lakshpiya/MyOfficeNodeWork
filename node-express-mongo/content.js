var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var schema = new Schema({ 
 firstName: {type: String, required: true}, 
 lastName: {type: String, required: true},
 email: {type: String, required: true}, 
 lPassword: {type: String, required: true} 
}); 
module.exports = mongoose.model('Registration', schema);