import { Box, Table, TableCell, TableRow, Typography, styled } from "@mui/material";
import {LocalOffer as OfferIcon} from '@mui/icons-material';

import React from "react";

const fassured =  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


const SideItemDetails = ({ products }) => {

  const date = new Date(new Date().getTime()+5*24*60*60*1000)

  const StyledOfferIcon = styled(OfferIcon)({
     marginRight:10,
     color:'#00CC00',
     fontSize:15
  })

  const Container = styled(Box)({
        fontSize:14,
        verticalAlign:'baseline',
        marginTop:10,
        '& > p' :{
          fontSize:14,
        }
  })

  
  const StyledTableRow = styled(TableRow)({

    verticalAlign:'baseline',
     '& > td' : {
      fontSize:'14px',
      marginTop:'10px',
      border:"none"
     }

  })

  return (
    <>
      <Box>
        <Typography>{products.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
          8 Review 1 rating
          <Box component="span">
            <img
              src={fassured}
              style={{ width: 77, marginLeft: 20 }}
              alt="fassured"
            />
          </Box>
        </Typography>
        <Typography>
          <Box component="span" style={{ fontSize: 28 }}>
            {" "}
            ₹{products.price.cost}
          </Box>
          <Box component="span" style={{ color: "#878787", marginLeft: 8 }}>
            <strike>{products.price.mrp}</strike>
          </Box>
          <Box
            component="span"
            style={{ color: "#388E3C", marginLeft: 8, fontWeight: "550" }}
          >
            {products.price.discount} off
          </Box>
        </Typography>
      </Box>

      <Typography>Available offers</Typography>
      <Container>
        <Typography>
        <StyledOfferIcon/>  Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth
          ₹10,000* T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/> Get extra 17% off (price inclusive of cashback/coupon) T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/>  Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹15,000 to ₹39,999 T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/> Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹40,000 to ₹49,999 T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/> Flat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of
          ₹50,000 and above T&C
        </Typography>
        <Typography>
        <StyledOfferIcon/>  Apply & get ₹10,000 Times Prime benefits + ₹1,000 Gift Card* with
          Flipkart Axis Bank Credit Card Know More
        </Typography>
        <Table>
          <StyledTableRow>
              <TableCell  style={{color:'#878787',fontWeight:600}}>Delivery</TableCell>
              <TableCell>Delivery by {date.toDateString()} | ₹40</TableCell>
          </StyledTableRow>
          <StyledTableRow>
              <TableCell  style={{color:'#878787',fontWeight:600}}>Warranty</TableCell>
              <TableCell>No Warranty</TableCell>
          </StyledTableRow>
          <StyledTableRow>
              <TableCell  style={{color:'#878787',fontWeight:600}}>Seller</TableCell>
              <TableCell>
                <Box component='span' style={{color:'#2874f0',fontWeight:600}}>OmniTechRetail</Box>
                <Typography style={{fontSize:14}}>7 Days Service Center Replacement/Repair</Typography>
                <Typography style={{fontSize:14}}>GST invoice available</Typography>
                <Typography style={{fontSize:14}}>View More Seller Starting from  ₹{products.price.cost}</Typography>
              </TableCell>
          </StyledTableRow>
          <StyledTableRow>
             <TableCell colSpan={2}>
                 <img src={adURL} alt="flipkartsupercoin" style={{width:390}}/>
             </TableCell>
          </StyledTableRow>
          <StyledTableRow>
              <TableCell  style={{color:'#878787',fontWeight:600}}>Description</TableCell>
              <TableCell>{products.description}</TableCell>
          </StyledTableRow>
        </Table>
      </Container>
    </>
  );
};

export default SideItemDetails;
