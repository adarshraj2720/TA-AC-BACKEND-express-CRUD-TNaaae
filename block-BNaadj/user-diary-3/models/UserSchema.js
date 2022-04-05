var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : {type : String, required :true},
    email : {type: String,required:true},
    age : Number,
    address:String,
    bio :String,
    hobbies:[String]
})

var UserModel = mongoose.model('UserModel',UserSchema);

module.exports= UserModel;