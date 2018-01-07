// this model is for server purposes and therefore 
// will not be used by angular
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// blueprint
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// let frontend create instances of this model using the blueprint
// use 'new Message()' to create a new instance
module.exports = mongoose.model('Message', schema);

