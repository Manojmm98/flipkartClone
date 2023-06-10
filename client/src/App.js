import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Components/Context/userContext';
// all providers



function App() {
  return (
    <DataProvider >
      <Header/>     
      <Box sx={{marginTop:"55px"}}>
      <Home />
      </Box>
    </DataProvider>
  );
}

export default App;