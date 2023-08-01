import React,{useState,useContext} from 'react'
import { Box, Button, Dialog, Stack, TextField, Typography } from '@mui/material'
import { DataContext } from '../Context/userContext'
import { AuthnticateUserSignup,AuthnticateUserLogin } from '../Service/api'



const AccountInformation ={
  login:{
     view:"login",
     heading:"Login",
     subHeading:"Get access to your Orders, Wishlist and Recommendations"
  },
  signup:{
     view:"signup",
     heading:"Looks like you're new here!",
     subHeading:"Sign up with your mobile number to get started"
  }
}

const SignUpInformation ={
     firstname :'',
     lastname :'',
     username : '',
     email : '',
     password : '',
     phone : ''
}
const loginInformation ={
  username : "",
  password : ""
}

const LoginDailog = ({open,setOpen}) => {

  const [toogleAccount, setToogleAccount] = useState(AccountInformation.login);
  const [signupData, setsignupData] = useState(SignUpInformation)
  const [loginData, setloginData] = useState(loginInformation)
  const [Error,setError] = useState(false)

   const {setAccountInfo} = useContext(DataContext) 

    const handleClose=()=>{
        setOpen(false);
        setError(false);
        setToogleAccount(AccountInformation.login)
    }
   
    const toggleAccHandler=()=>{
        setToogleAccount(AccountInformation.signup)
    }

    const handleSignUp=(e)=>{
       setsignupData({...signupData,[e.target.name]: e.target.value})
       console.log(signupData);
    }

    const handleLogin=(e)=>{
      setloginData({...loginData,[e.target.name]: e.target.value})
      console.log(loginData);
    }

    const userLogin=async()=>{

      let response =  await  AuthnticateUserLogin(loginData);
      console.log(response);
      if(response.status===200){
      handleClose();
      setAccountInfo(response.data.data.firstname)
      }
      else{
          setError(true)
      }
    }

    const userSignup= async()=>{
     let response =  await  AuthnticateUserSignup(signupData);
      if(!response){
        return;
      }
      handleClose();
      setAccountInfo(signupData.firstname)
    }

    const styles = {
         first :{
             background:"#2874f0",
             height:"90%",
             padding:"25px 35px",
             width:"35%",
             
         },
         loginButton :{
          textTransform:"none",
          background:"#FB641B",
          color:"#fff",
          borderRadius:"2px",
          marginTop:"20px",
          height:"48px",
          width :"100%"
         },
         requestBotton :{
          textTransform:"none",
          background:"#fff",
          color:"#2874f0",
          height:"48px",
          borderRadius:"2px",
          marginTop:"20px",
          width :"100%",
          boxShadow:"0 2px 4px 0 rgb(0 0 0/ 20%)"
         },
         error : {
            color:"red",
            fontSize:"10px",
            lineHeight:0,
            marginTop:' 10px',
            marginBottom:"10px",
            fontWeight:600
         }
    }

  return (

    <div>
        <Dialog open={open} onClose={handleClose}>
            <Stack direction='row' sx={{height:"67vh",width:'100%'}}>
              
              <Box style={styles.first}>
                <Typography variant='h5' style={{color:"#fff",fontWeight:600}}>{toogleAccount.heading}</Typography>
                <Typography style={{marginTop:"20px",color:"#fff"}}>{toogleAccount.subHeading}</Typography>
                <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' alt='loginpage' style={{marginTop:"60%"}} align='center'></img>
              </Box>
            { toogleAccount.view === "login" ?
              <Box  sx={{padding:"25px 35px",flex:1,marginTop:"20px",width:"60%"}}>
                   <TextField variant='standard' name='username' label='Enter Email/Mobile Number'  onChange={(e)=>handleLogin(e)} fullWidth={true}></TextField>
                    {Error && <Typography style={styles.error} >Please Enter Valid Username or Password</Typography>}
                   <TextField variant='standard' name='password' label='Enter Password' fullWidth={true}  onChange={(e)=>handleLogin(e)}></TextField>
                  
                   <Typography sx={{fontSize:"12px",color:"#878787",marginTop:"20px"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                    <Button style={styles.loginButton} onClick={()=>userLogin()}>Login</Button>
                    <Typography style={{textAlign:"center",marginTop:"20px"}}>OR</Typography>
                    <Button style={styles.requestBotton}>Request Otp</Button>
                    <Typography sx={{fontSize:"14px",textAlign:"center",marginTop:"20px",color:"#2874f0",fontWeight:600,cursor:"pointer"}} onClick={toggleAccHandler}>New to Flipkart? Create an account</Typography>
              </Box>
               :
              <Box  sx={{padding:"25px 35px",flex:1,marginTop:"20px",width:"60%"}}>
                   <TextField variant='standard' label='Enter FirstName' fullWidth={true} name='firstname' onChange={(e)=>handleSignUp(e)}></TextField>
                   <TextField variant='standard' label='Enter LastName' fullWidth={true} name='lastname'  onChange={(e)=>handleSignUp(e)}></TextField>
                   <TextField variant='standard' label='Enter Username' fullWidth={true} name='username'  onChange={(e)=>handleSignUp(e)}></TextField>
                   <TextField variant='standard' label='Enter Email' fullWidth={true} name='email'  onChange={(e)=>handleSignUp(e)}></TextField>
                   <TextField variant='standard' label='Enter Password' fullWidth={true} name='password'  onChange={(e)=>handleSignUp(e)}></TextField>
                   <TextField variant='standard' label='Enter phone' fullWidth={true} name='phone'  onChange={(e)=>handleSignUp(e)}></TextField>
                    <Button style={styles.loginButton} onClick={()=>userSignup()}>Continue</Button>
              </Box>
               

            }
            </Stack>
        </Dialog>
    </div>
  )
}

export default LoginDailog