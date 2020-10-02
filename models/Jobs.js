const mongoose = require('mongoose');
const {Schema} = mongoose;

const jobSchema= new Schema({
title: String,
wage: String,
distance:String ,
jpLevel:String ,
createdAt:{type:Date , default:Date.now() } ,
img: String,
longitude:Number,
latitude:Number
});

mongoose.model('jobs',jobSchema);
