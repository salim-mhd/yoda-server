const mongoose= require('mongoose');
const userschema =mongoose.Schema({
 firstname:String,
 lastname:String,
 email:String,
 block:Boolean
},{ timestamps: true });
const userone =mongoose.model("users",userschema)
module.exports=userone 