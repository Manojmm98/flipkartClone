import { Box, Button, Divider, Typography, styled } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown';
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'

const styles = {

  mainBox:{
    marginTop:"10px",
    background:"#ffffff"
  },
  dealBox :{
    padding:"15px 25px",
    display:'flex',
    margin:'10px'   
  }
  ,
  typoBox : {
    fontSize :"22px",
    fontWeight: 600,
    marginRight:"25px",
    lineHeight : "32px"

  },
  innerBox : {
    display:'flex',
    marginLeft:"10px",
    alignItems :"center",
    color :"#7f7f7f"
  },
  viewAllBox : {
        marginLeft: 'auto',
        background:"#2874f0",
        borderRadius:"2px",
        fontSize:"13px",
        fontWeight:600

  },
  sliderImage:{
    width:"auto",
    height:"120px"
  }
  
  
  };

  const Text = styled(Typography)`
      font-size:14px;
      margin-top:5px;
  
  `


  
  const Slider = ({products,title,timer}) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      const renderer = ({ hours, minutes, seconds, completed }) => {
          return <Box variant='span'>{hours}:{minutes}:{seconds} left</Box>;
        
      };




  return (



    <Box style={styles.mainBox}>
      <Box style={styles.dealBox} >
        <Typography style={styles.typoBox} >{title}</Typography>
        {  timer && 
        <Box style={styles.innerBox}>
          <img src={timerURL} alt='clock' style={{width:24,marginRight:10}}/>
          <Countdown date={Date.now() + 5.04e+7}  renderer={renderer}></Countdown>
        </Box>
          }
          <Button variant='contained' style={styles.viewAllBox}>View All</Button>
      </Box>
    <Divider/>
    <Carousel responsive={responsive}
    infinite={true}
    autoPlaySpeed={3000}
    slidesToSlide={1}
    swipeable={false}
    autoPlay={true}
    draggable={false}
    centerMode={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    
    
    >
       {
         products.map((data)=>(
           <Link to = {`product/${data.id}`}>
            <Box sx={{textAlign:'center',padding:"15px 25px"}}>
             <img src={data.url} alt='products' style={styles.sliderImage} />
             <Text style={{fontWeight:600,color:"#212121"}}>{data.title.shortTitle}</Text>
             <Text style={{color:"green"}}>{data.discount}</Text>
             <Text style={{color:"#212121",opacity:"0.6"}}>{data.tagline}</Text>
             </Box>
            </Link>
             
         ))
       }
     </Carousel>
     </Box>

  )
}

export default Slider
