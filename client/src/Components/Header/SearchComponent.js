import { Box, InputBase } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Buttons from './Buttons';

const SearchComponent = () => {
  return (
    <Box display={'flex'} sx={{background:"#fff",borderRadius:"2px",width:'38%',marginLeft:'10px',}}>
      <InputBase
      
      placeholder='Search for products,brands and more'
      
       style={{paddingLeft:"20px",width:"100%",fontSize:"unset"}}
      />
      <Box sx={{display:'flex'}}>
        <SearchIcon style={{color:"#2874f0",margin:"5px"}}/>
      </Box>
      
    </Box>
  )
}

export default SearchComponent