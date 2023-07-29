import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Components/Context/userContext';
import ProductsDetails from './Components/DetailsPage/ProductsDetails';

import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import OrderSucess from './Components/Cart/OrderSucess';
// all providers



function App() {
  return (
    <DataProvider >
      <BrowserRouter> 
      <Header/> 
      <Box sx={{marginTop:"55px"}}>
        <Routes>
       <Route path='/' element={<Home />} />
       <Route path= '/product/:id' element={<ProductsDetails/>} />
       <Route path='/cart' element ={<Cart/>} />
       <Route path= '/sucess' element={<OrderSucess/>} />
      </Routes>
      </Box>
      </BrowserRouter> 
    </DataProvider>
  );
}

export default App;