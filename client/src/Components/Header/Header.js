
import React,{useState} from 'react'
import {AppBar,Box,Toolbar,styled, Typography, IconButton, Drawer, List, ListItem} from '@mui/material'
import flipimage from '../../Assets/flipkart-plus_8d85f4.png';
import flogo from "../../Assets/plus_aef861.png"
import SearchComponent from './SearchComponent';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

 const [open,setOpen] = useState(false);

  const ButtonsWrapper = styled(Box)(({theme})=>({
      margin:'0 8% 0 auto',
    [theme.breakpoints.down('sm')] : {
      display:"none"
    }
  }))

  const MenuButton = styled(IconButton)(({theme})=>({
      display:'none',
     [theme.breakpoints.down('sm')] : {
        display:'block'
     }
  }))


  const handleOpen = ()=>{
      setOpen(true)
  }
  const handleClose = ()=>{
      setOpen(false)
  }

  const list = ()=>(
     <Box>
       <List>
        <ListItem>
        <Buttons/>
        </ListItem>
       </List>
       </Box>
  )



  return (
      <AppBar style={{background:"#2874f0"}}>
        <Toolbar style={{minHeight:55}}>
            <MenuButton color='inherit'  onClick={handleOpen} >
              <MenuIcon />
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
              {list()}
            </Drawer>
              <Box sx={{ml:"12%",lineHeight:0}}>
                <Link to='/'>
                <img src={flipimage} alt='logo' style={{height:22}} />
                </Link>
              <Box display={'flex'}>
                <Typography style={{fontStyle:'italic',fontSize:10}}>
                    Explore&nbsp; 
                    <Box component='span' style={{fontStyle:'italic',color:"#FFE500",fontSize:10}}>Plus</Box>
                </Typography>
                <Box>
              <Link to='/'>
                <img src={flogo} alt='plus logo' style={{width:10,marginLeft:'3px'}} />
                </Link>
                </Box>
              </Box>
              </Box>
        
        <SearchComponent/>
        <ButtonsWrapper>
        <Buttons/>
      </ButtonsWrapper>
        </Toolbar>
      </AppBar>
  )
}

export default Header;