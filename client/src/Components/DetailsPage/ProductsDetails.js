import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../redux/actions/getProductAction";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import ImageItem from "./ImageItem";
import SideItemDetails from "./SideItemDetails";

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, products } = useSelector((state) => state.getproductdetails);


  const Container = styled(Box)(({theme})=>({
    display:"flex",
    background:"#FFFFFF",
    [theme.breakpoints.down('md')] : {
      margin:0
    }
  }))

  const RightContainer = styled(Grid)(({theme})=>({
      marginTop:"50px",
      '& > p' :  {
       marginTop: '10px'
    },
    [theme.breakpoints.down('sm')]:{
      margin:20
    }
      // display:"flex"
  }))

  

  useEffect(() => {
    if (products && products.id !== id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id, loading, products]);

  return (
    <Container>
      {products && Object.keys(products).length && (
        <Grid container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Box style={{width:"90%"}}>
              <ImageItem products={products} />
            </Box>
          </Grid>
          <RightContainer item lg={8} md={8} sm={4} xs={12}>
             <SideItemDetails products={products}/>
          </RightContainer>
        </Grid>
      )}
    </Container>
  );
};

export default ProductsDetails;
