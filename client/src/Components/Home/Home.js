import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box } from '@mui/material'

const Home = () => {

    const styles = {
      
       container:{
            padding:"10px",
            background:'#F2F2F2'
       }
        
      };




  return (
    <>
        <NavBar/>
        <Box style={styles.container}>
        <Banner/>
        </Box>
        
    </>
  )
}

export default Home