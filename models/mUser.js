const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true,
    },gender:{
        type:String,
    },jobTitle:{
        type:String,
    }
},{timestamps:true})

const userModel= new mongoose.model('students',userSchema);

module.exports=userModel;