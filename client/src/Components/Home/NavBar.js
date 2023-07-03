import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../Assets/Data'

const NavBar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' sx={{padding:'0px 2px 5px',overflow:'auto'}}>
    { navData.map((data)=>(
    <Box sx={{padding:"12px 8px",textAlign:'center'}} >
      <img src={data.url} alt={data.text} style={{width:64}}/>
      <Typography sx={{fontSize:"14px",fontFamily:'inherit',fontWeight:600}}>{data.text}</Typography> 
    </Box>

     ))
    }
     </Stack>
  )
}

export default NavBar