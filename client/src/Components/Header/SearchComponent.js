import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from 'react-redux'
import { getProductAction } from '../redux/actions/getProductAction';
import { Link } from 'react-router-dom';

const SearchComponent = () => {

  const [enteredText, setEnteredText] = useState('');

  const {products} = useSelector(state=>state.getproducts)
  const dispatch = useDispatch();


  const Listwrapper = styled(List)({
       position:"absolute",
       background:"#FFFFFF",
       color:'#000',
       marginTop:'36px'
  })

  const getText=(text)=>{
    setEnteredText(text)
  }


  useEffect(() => {
      dispatch(getProductAction())
  }, [dispatch])
  


  return (
    <Box style={{display:'flex',background:"#FFFFFF",borderRadius:"2px",width:'38%',marginLeft:'10px',}}>
      <InputBase
      
        placeholder='Search for products,brands and more'
        value={enteredText}
        onChange={(e)=>getText(e.target.value)}
       style={{paddingLeft:"20px",width:"100%",fontSize:"unset"}}
      />
      <Box style={{display:'flex'}}>
        <SearchIcon style={{color:"#2874f0",margin:"5px"}}/>
      </Box>
      { enteredText &&
      <Listwrapper>
           {
            products.filter((product)=>product.title.longTitle.toLowerCase().includes(enteredText.toLowerCase())).map((product)=>(
              <ListItem>
                <Link to = {`product/${product.id}`} onClick={()=>setEnteredText('')}
                style={{textDecoration:'none',color:'inherit'}}
                >
                 {product.title.longTitle}
                 </Link>
              </ListItem>
            ))
           }
      </Listwrapper>
}

      
    </Box>
  )
}

export default SearchComponent