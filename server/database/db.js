import mongoose from "mongoose";

const connection= async()=>{
 
   try{       
      await mongoose.connect(process.env.DB_URL,{useunifiedTopology:true,usenewUrlParser:true})
      console.log('database connected sucessfully');
    } catch(error){
        console.log('Error while connecting',error.message);
    }
}

export default connection;