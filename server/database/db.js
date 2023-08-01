import mongoose from "mongoose";

const connection= async(URL)=>{


    // the special character in password for @ is %40 & % is %25
//    const URL = `mongodb+srv://${username}:${password}@cluster0.2axqusw.mongodb.net/?retryWrites=true&w=majority`
  

   try{       
      await mongoose.connect(URL,{useunifiedTopology:true,usenewUrlParser:true})
      console.log('database connected sucessfully');
    } catch(error){
        console.log('Error while connecting',error.message);
    }
}

export default connection;