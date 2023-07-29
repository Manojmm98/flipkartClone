import React,{useState,useEffect, useContext} from 'react'
import { Box, Divider, Typography, styled } from '@mui/material'




const PriceDetails = ({cartItems}) => {

  const [ totalPrice,setTotalPrice] = useState(0);
  const [totaldiscount,setTotalDiscount] = useState(0);


   const Header = styled(Box)({
       padding:"15px 24px",
       background:"#fff",
       borderBottom:"1px solid #f0f0f0"
   })

   const Container = styled(Box)({
    padding:"15px 24px",
    background:"#fff",
    '& >p' :{
      marginBottom :"20px",
      fontSize:"14px"
    },
    '& >h6' :{
      marginBottom :"20px"
    }
    
   })


   const totalAmmount =()=>{
        
    let price=0,discount=0;

        cartItems.map(item=>{
            price += item.price.mrp;
            discount+= (item.price.mrp-item.price.cost)
        })

        setTotalPrice(price);
        setTotalDiscount(discount);
   }

   useEffect(() => {
     totalAmmount();
   }, [cartItems])
   


  return (
    <Box>
      <Header>
        <Typography sx={{color:"#878787"}}>Price Details</Typography>
      </Header>
      <Container>
        <Typography>Price  ({cartItems.length} item)
        <Box component='span' style={{float:"right"}}>₹{totalPrice}</Box>       
        </Typography>
        <Typography>Discount
        <Box component='span' style={{float:"right"}}>-₹{totaldiscount}</Box>       
        </Typography>
        <Typography>Delivery Charges
        <Box component='span' style={{float:"right"}}>₹40</Box>       
        </Typography>
        <Divider/>
        <Typography sx={{marginTop:"10px"}} variant='h6'> Total Ammount
        <Box component='span' style={{float:"right"}}>₹{totalPrice-totaldiscount+40}</Box>       
        </Typography>
        
        <Typography sx={{marginTop:"10px",color:"green",fontWeight:"550"}}>You will save ₹{totaldiscount-40} on this order         
        </Typography>
      </Container>
    </Box>
  )
}

export default PriceDetails