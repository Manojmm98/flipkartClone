import mongoose from "mongoose";

const connection= async(username,password)=>{


    // the special character in password for @ is %40 & % is %25
//    const URL = `mongodb+srv://${username}:${password}@cluster0.2axqusw.mongodb.net/?retryWrites=true&w=majority`
   const URL =`mongodb://${username}:${password}@ac-qxea7z4-shard-00-00.2axqusw.mongodb.net:27017,ac-qxea7z4-shard-00-01.2axqusw.mongodb.net:27017,ac-qxea7z4-shard-00-02.2axqusw.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4z64w-shard-0&authSource=admin&retryWrites=true&w=majority`;



   
   
   try{       
      await mongoose.connect(URL,{useunifiedTopology:true,usenewUrlParser:true})
      console.log('database connected sucessfully');
    } catch(error){
        console.log('Error while connecting',error.message);
    }
}

export default connection;