import { Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ItemDetails from './ItemDetails'
import PriceDetails from './PriceDetails'
import EmptyCart from './EmptyCart'
import { useNavigate } from 'react-router-dom'


const Cart = () => {


    const { cartItems } = useSelector(state=>state.cart)
    const navigate = useNavigate()

    const Wrapper = styled(Grid)(({theme})=>({
        padding:"30px 135px",
        [theme.breakpoints.down('md')] : {
            padding:'15px 0'
          }
       
    }))

    const Header = styled(Box)({
        padding:"15px 25px",
        background:"#fff"
    })

    const ButtonWrapper = styled(Box)({
          padding:"16px 22px",
          background:"#fff",
          boxShadow:"0 -2px 10px 0 rgb(0 0 0 / 10%)",
          borderTop:"1px solid #f0f0f0"
    })
    const OrderButton = styled(Button)({
          display:"flex",
          marginLeft:"auto",
          background:"#fb641b",
          color:"#fff",
          width:"250px",
          height:"51px",
          borderRadius:"2px"
    })
    const LeftComponent = styled(Grid)(({theme})=>({
        paddingRight:15,
      [theme.breakpoints.down('md')] : {
        marginBottom:15
      }
    }))


  return (
    <>

    {
    
    cartItems.length ?    
    <Wrapper container>

        
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
            <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(items=>(
                    <ItemDetails  items={items}/>
                ))
            }

        <ButtonWrapper>
            <OrderButton variant='contained' onClick={()=>{navigate('/sucess')}}>Place Order</OrderButton>
        </ButtonWrapper>
            
        </LeftComponent>


        <Grid item lg={3} md={3} sm={12} xs={12}>
             <PriceDetails cartItems={cartItems}/>
        </Grid>
      

      </Wrapper>
      : 
     <EmptyCart/>
    }

</>
  )
}

export default Cart