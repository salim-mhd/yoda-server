const mongoose= require('mongoose');
const userschema =mongoose.Schema({
 firstname:String,
 lastname:String,
 email:String,
 createdat:String,
 status:String
});
const userone =mongoose.model("users",userschema)
module.exports=userone 