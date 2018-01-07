// this model is for server purposes and therefore 
// will not be used by angular
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// in order to use 'unique' install the 3rd party package
var mongooseUniqueValidator = require('mongoose-unique-validator');

// blueprint
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    // the unique setting determines whether duplicate values are allowed
    email: {type: String, required: true, unqiue: true},
    // the ref setting creates a link between itself and the model entered
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// plugin the 3rd party package to schema
schema.plugin(mongooseUniqueValidator);

// let frontend create instances of this model using the blueprint
// use 'new Message()' to create a new instance
module.exports = mongoose.model('User', schema);

// database collections will be named after the model string
// model: 'User' --> collection: 'users'

