import React,{useState} from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import addEllipsis from '../../utils/CommonUtils';
import GroupedButton from './ButtonGroup';
import { useDispatch } from 'react-redux';
import { RemoveFromcart } from '../redux/actions/cartAction';




const fassured =  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


const ItemDetails = ({items}) => {
  const [quantity, setquantity] = useState(1);



   const dispatch = useDispatch();
 
   const removeFromCart=(id)=>{
        dispatch(RemoveFromcart(id))
   }


    const Container = styled(Box)({
        border:'1px solid #f0f0f0',
        display:'flex',
        background:"#fff"
    })

    const LeftComponent = styled(Box)({
        margin:"20px",
        display:'flex',
        flexDirection:'column'
    })

    const SmallText = styled(Box)({
        color:"#878787",
        fontSize:'14px',
        marginTop:10
    })


  return (
      <Container>
        <LeftComponent>
             <img src={items.url} alt='productImage' style={{height:120,width:120}}/>
             <GroupedButton quantity={quantity} setquantity={setquantity}/>
        </LeftComponent>

        <Box style={{margin:10}}>
            <Typography>{addEllipsis(items.title.longTitle)}</Typography>
            <SmallText>Seller : RetailNet

                <Box component='span'>
                      <img src={fassured} alt='fassured' style={{width:50,marginLeft:10}}/>
                </Box>
            </SmallText>
     <Typography style={{margin:'20px 0'}}>
          <Box component="span" style={{ fontWeight:600,fontSize:18 }}>
            {" "}
            ₹{items.price.cost}
          </Box>
          <Box component="span" style={{ color: "#878787", marginLeft: 8 }}>
            <strike>{items.price.mrp}</strike>
          </Box>
          <Box
            component="span"
            style={{ color: "#388E3C", marginLeft: 8, fontWeight: "550" }}
          >
            {items.price.discount} off
          </Box>
        </Typography>
        <Button style={{color:'#000',marginTop:20,fontSize:16,fontWeight:550}}>Save for Later</Button>
        <Button style={{color:'#000',marginTop:20,fontSize:16,fontWeight:550}} onClick={()=>removeFromCart(items.id)}>Remove</Button>
        </Box>
      </Container>
  )
}

export default ItemDetails