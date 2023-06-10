import user from "../model/user-schema.js";

export const UserSignup= async(request,response)=>{

    try{

        const existsUserName = await user.findOne({username: request.body.username})
           
        if(existsUserName){
            return response.status(401).json({message:"UserName Already Exists"})
        }
      
      let userbody = request.body;
      let newUserBody = new user(userbody);
      await newUserBody.save();
      response.status(200).json({message:userbody})
    }
    catch(error){

        response.status(500).json({message:error.message})
    }

}
export const UserLogin= async(request,response)=>{

    try{

      let username = request.body.username;
      let password = request.body.password;
      
      let userDetails = await user.findOne({username:username,password:password}) 

      if(userDetails){
        return response.status(200).json({data:userDetails})
      }
      else{
        return response.status(401).json('Invalid Login')
      }


    }
    catch(error){

        response.status(500).json("Error while login",error.message)
    }

}
