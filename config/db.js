const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const connect= async ()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI);
        console.log('connection successfull')
    }catch(error){
        console.log('error in connection')
    }
};
module.exports=connect;
