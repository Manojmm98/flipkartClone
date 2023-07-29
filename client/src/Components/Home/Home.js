import React,{useEffect} from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box } from '@mui/material'
import {getProductAction} from '../redux/actions/getProductAction'
import {useDispatch,useSelector} from 'react-redux'
import Slider from './Slider'
import MidSlider from './MidSlider'
import AddsBar from './AddsBar'

const Home = () => {

    const styles = {
      
       container:{
            padding:"10px",
            background:'#F2F2F2'
       }
        
      };

    const { products } = useSelector(state=>state.getproducts)

    console.log(products);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction())
   
  }, [dispatch])
  


  return (
    <>
        <NavBar/>
        <Box style={styles.container}>
        <Banner/>
        <MidSlider products={products} title="Deal of the Day" timer={true}/>
        <AddsBar/>
        <Slider products={products} title="Today's Fashion Deals"/>
        <Slider products={products} title="Fashion Best Sellers"/>
        <Slider products={products} title="End of Season Bestsellers"/>
        <Slider products={products} title="Monsoon Essentials"/>
        <Slider products={products} title="Sports & Fitness Essentials"/>
        <Slider products={products} title="Offers on Furniture"/>
        <Slider products={products} title="Appliances"/>
        <Slider products={products} title="Best of Electronics"/>
        <Slider products={products} title="Essentials for Her"/>
        </Box>
        
    </>
  )
}

export default Home