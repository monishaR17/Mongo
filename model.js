const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    name:String,
    phoneno:Number,
    roll:String
})
const user = mongoose.model('user',userSchema);
module.exports=user;

