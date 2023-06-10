
import React from 'react'
import {AppBar,Box,Stack,Toolbar, Typography} from '@mui/material'
import flipimage from '../../Assets/flipkart-plus_8d85f4.png';
import flogo from "../../Assets/plus_aef861.png"
import SearchComponent from './SearchComponent';
import Buttons from './Buttons';



const Header = () => {

  return (
      <AppBar style={{background:"#2874f0"}}>
        <Toolbar style={{minHeight:55}}>
              <Box sx={{ml:"12%",lineHeight:0}}>
                <img src={flipimage} alt='logo' style={{height:22}} />
              <Box display={'flex'}>
                <Typography style={{fontStyle:'italic',fontSize:10}}>
                    Explore&nbsp; 
                    <Box component='span' style={{fontStyle:'italic',color:"#FFE500",fontSize:10}}>Plus</Box>
                </Typography>
                <Box>
                <img src={flogo} alt='plus logo' style={{width:10,marginLeft:'3px'}} />
                </Box>
              </Box>
              </Box>
        <SearchComponent/>
        <Box>
        <Buttons/>
      </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header;