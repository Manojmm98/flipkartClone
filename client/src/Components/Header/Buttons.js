import React,{useState,useContext} from 'react'
import { Button, Stack, Typography,Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDailog from '../Login/Dailog';
import { DataContext } from '../Context/userContext';
import Profile from './Profile';


const Buttons = () => {
const [open, setOpen] = useState(false)

const {accountInfo,setAccountInfo}  = useContext(DataContext)


    const styles = {       
       button:{
        color:'#2874f0',
        background:'#ffff',
        marginLeft:"15px",
        padding:"5px 40px",
        borderRadius:"2px",
        fontWeight:'500px',
        },
       
        
      };

  const handleLogin=()=>{
     setOpen(true)
  }

  return (
    <Stack direction='row' spacing={4}>
        <Box>
         {accountInfo ?
            <Profile accountInfo={accountInfo} setAccountInfo={setAccountInfo}/>
            :<Button variant='contained' style={styles.button} onClick={()=>handleLogin()}>Login</Button>
         } 
            </Box>
        <Typography style={{marginTop:'5px'}}>
           Become a seller
        </Typography>
        <Typography style={{marginTop:'5px'}}>
           More
        </Typography>
        <Box display={'flex'} style={{marginTop:'5px'}}>
              <ShoppingCartIcon  />
           <Typography>Cart</Typography> 
        </Box>
        <LoginDailog open={open} setOpen={setOpen}/>
    </Stack>
  )
}

export default Buttons