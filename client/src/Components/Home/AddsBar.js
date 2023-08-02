import { Grid, styled } from '@mui/material'
import React from 'react'
import { imageURL } from '../../Assets/Data'

const AddsBar = () => {

const Wrapper = styled(Grid)`
    margin-top :"10px";
    justify-content:"space-between"
`
const Image = styled('img')(({theme})=>({
    marginTop :10,
    width: "100%",
    display: 'flex',
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]: {
        objectFit:"cover",
        height:120
    }

}))

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


  return (
    <>
       <Wrapper xs={12}md={12}lg={12} container>
           {
            imageURL.map((image)=>(
                <Grid item xs={12}md={4}lg={4}>
                    <img src={image} alt='addimage' style={{width:"100%"}}/>
                </Grid>
            ))
           }
       </Wrapper>
       <Image src={url} alt='covid'/>
    </>
  )
}

export default AddsBar