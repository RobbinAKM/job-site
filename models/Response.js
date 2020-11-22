const mongoose = require('mongoose');
const {Schema} = mongoose;

const responseSchema= new Schema({
name: String,
jplevel: String,
visa:String ,
sta :String ,
createdAt:{type:Date , default:Date.now() } ,
email: String,
});

mongoose.model('response',responseSchema);
