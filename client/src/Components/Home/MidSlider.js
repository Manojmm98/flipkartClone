import { Box, styled } from '@mui/material'
import React from 'react'
import Slider from './Slider'

const MidSlider = ({products,title,timer}) => {
   
    const addUrl="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/2e3d520dea774823.jpg?q=70"


    const FirstBox = styled(Box)(({theme})=>({

        width:'83%',
        [theme.breakpoints.down('md')] : {
            width :"100%"
        }

    }))
    const AddBox = styled(Box)(({theme})=>({
        marginLeft:"10px",
        marginTop:"10px",
        width:"17%",
        padding:"5px",
        background:"white",
        textAlign:"center",
        [theme.breakpoints.down('md')] : {
            display:"none"
        }

    }))

  return (
      <Box sx={{display:"flex"}}>
          <FirstBox>
          <Slider products={products} title={title} timer={timer}/>
          </FirstBox>
          <AddBox >
             <img src={addUrl} alt='addImage' style={{width:217}} />
          </AddBox>
      </Box>
  )
}

export default MidSlider