const mongoose=require("mongoose");
const userSchrma=new mongoose.Schema({
name:{
    type:String,
    required:true,
    
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:6,

    maxlength:12,

},
image:{
    type:String,


},
blog:[{

type:mongoose.Types.ObjectId,
ref:"Blog",
required:true


}]
},{timestamps:true});

module.exports=mongoose.model("user",userSchrma);
