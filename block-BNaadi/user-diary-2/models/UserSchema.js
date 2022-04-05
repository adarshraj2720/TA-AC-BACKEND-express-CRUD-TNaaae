var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : {type : String, required :true},
    email : String,
    age : Number,
    bio :String
})

var UserModel = mongoose.model('UserModel',UserSchema);

module.exports= UserModel;