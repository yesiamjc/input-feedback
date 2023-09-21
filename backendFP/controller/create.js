const feedback=require("../models/models");

exports.pFeedBack=async(req,res)=>{

    try{
        const{name, email, input1, input2, input3, input4, description}=req.body;
        const response=await feedback.create({name, email, input1, input2, input3, input4, description});
        res.status(200).json({
            success:true,
            data:response,
            message:'data entred',

        })

    }
    catch(err){
        console.error(err);
        console.log("data not entered");
        res.status(500).json({
            success:false,
            data:err.message,
            message:' data not entered',
        })
    }
    

}