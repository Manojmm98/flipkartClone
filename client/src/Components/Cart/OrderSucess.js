import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import tickdone from '../../Assets/tick-done.png'
import { useNavigate } from 'react-router-dom';

const OrderSucess = () => {

    const styles = {
     
        HomeButton:{
            color:'#2874f0',
            background:'#ffff',
            borderRadius:"2px",
            fontWeight:'500px',
            marginTop:'10px'
            },
    }

  let navigate = useNavigate()

  return (
    <Box>
        <Box display="flex"
  justifyContent="center"
  flexDirection='column'
  alignItems="center" sx={{height: '60vh',background:'#2874f0',color:'#fff'}}>
         <img src={tickdone} alt='done' style={{width:'10%',marginBottom:'10px'}}/>
         <Typography sx={{fontSize:25,fontWeight:600}}>  Order Placed Sucessfully </Typography> 
         <Typography sx={{fontSize:18}}> Thank you !</Typography>
         <Button variant='contained' style={styles.HomeButton} onClick={()=>{navigate('/')}}>Back to Home</Button>
        </Box>
    </Box>
  )
}

export default OrderSucess