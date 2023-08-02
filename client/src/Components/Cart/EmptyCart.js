import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const EmptyCart = () => {

  const cartImg = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'

  const Container = styled(Box)({
     height:"60vh",
     width:"80%",
     background:"#fff",
     margin:'80px 140px'

  })

  const Wrapper = styled(Box)({
     textAlign:"center",
     padding:"70px"
  })

  

  return (
      <Container>
          <Wrapper>
             <img src={cartImg} alt='emptyCart' width='25%'/>
             <Typography style={{fontSize:"18px",marginTop:20}}>Missing Cart Items ?</Typography>
             <Typography style={{fontSize:"14px",marginTop:10}}>Add items into Cart !</Typography>
          </Wrapper>
      </Container>
  )
}

export default EmptyCart