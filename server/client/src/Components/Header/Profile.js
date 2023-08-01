import React from 'react'
import { Box, Typography,styled } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({accountInfo,setAccountInfo}) => {


    const Component = styled(Menu)`
      margin-top :"5px"
    
    `

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOut =()=>{
        setAccountInfo('')
    }


  return (
    <>
    <Box sx={{marginTop:"5px",marginLeft:"25px",cursor:"pointer"}} onClick={handleClick} >
        <Typography>{accountInfo}</Typography>
    </Box>
     <Component
     anchorEl={anchorEl}
     open={open}
     onClose={handleClose} 
      
   >
     <MenuItem onClick={()=>{handleClose();  logOut(); }} >
     <PowerSettingsNewIcon fontSize='small' color='primary'/>
        
      <Typography sx={{fontSize:"14px",marginLeft:"10px"}}>Log out</Typography>
    </MenuItem>
   </Component>
   </>
  )
}

export default Profile