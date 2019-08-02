var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: { type: String, require: true, unique: true, lowercase: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email : { type: String, require: true, lowercase: true},
    password: { type: String, require: true}
});


module.exports = mongoose.model('User',userSchema);