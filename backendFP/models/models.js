const mongoose=require("mongoose");


const fSchema=new mongoose.Schema(
    {
            name:{
                type:String,
                required:true,
                maxLength:50,
            },
            email:{
                type:String,
                required:true,
                maxLength:50,
            },
            input1:{
                type:Number,
                required:true,
                maxLength:10,
            },
            input2:{
                type:Number,
                required:true,
                maxLength:10,
            },
            input3:{
                type:Number,
                required:true,
                maxLength:10,
            },
            input4:{
                type:Number,
                required:true,
                maxLength:10,
            },
            description:{
                type:String,
                required:false,
                maxLength:1000,
            }
    }
);

module.exports=mongoose.model("feedback",fSchema);
