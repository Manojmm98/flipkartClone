import { Box, Button, styled } from '@mui/material'
import React,{useState} from 'react';
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AddToCart } from '../redux/actions/cartAction';
import { PayUsingPaytm } from '../Service/api';
import { post } from '../../utils/Paytm';



const LeftContainer = styled(Box)(({theme})=>({
     minWidth: '40%',
     padding: '40px 0 0 80px',
     [theme.breakpoints.down('lg')]:{
          padding:"20px 40px"
     }

}))
const Image = styled('img')({
     width:"90%",
     padding:'15px'
     
})
const StyledButton = styled(Button)(({theme})=>({ 
     width:'48%',
     height:'50px',
     borderRadius:"2px",
     [theme.breakpoints.down('md')] :{
          width:"46%"
     },
     [theme.breakpoints.down('sm')] :{
          width:"46%"
     },
     [theme.breakpoints.down('xs')] : {
          width:'48%',
  
     }

}))

const ImageItem = ({products}) => {

     const [quantity, setQuantity] = useState(1);
     
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const {id} = products;

    const addToCart = ()=>{
        dispatch(AddToCart(id,quantity))
        navigate('/cart')
    }

    const navigatetoSucess = ()=>{
         navigate('/sucess')
    }

    

  return (
      <LeftContainer>
            <Box style={{padding:'15px 20px',border:"1px solid #f0f0f0",marginBottom:20}}>
            <Image src={products.url} alt='products'/>
            </Box>
            
            <StyledButton variant='contained' onClick={addToCart} style={{marginRight:10,background:"#ff9f00"}}><Cart/>Add to cart</StyledButton>
            <StyledButton variant='contained' style={{background:"#fb541b"}} onClick={navigatetoSucess} ><Flash/>Buy Now</StyledButton>
           
      </LeftContainer>
  )
}

export default ImageItem