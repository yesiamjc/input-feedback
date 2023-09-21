require('dotenv').config();
const mongoose=require('mongoose');
const DATABASE=process.env.DATABASE

const dbconnect=()=>{
    mongoose.connect(DATABASE,{
       useNewUrlParser:true,
       useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connection passed.")
    })
    .catch((err)=>{
        console.log("Database failed to connect.");
        console.log(err.message);
    })

}
module.exports=dbconnect;