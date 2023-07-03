import axios from "axios"
import * as ActionType from '../contraints/productConstants'




const getProductAction = () => async(dispatch) => {

    try{

    const URL = 'http://localhost:8080'
    
    const {data} = await axios.get(`${URL}/products`)
   
   console.log(data);
    dispatch({type:ActionType.GET_PRODUCT_SUCESS, payload:data})
    }
    catch(error){
        dispatch({type:ActionType.GET_PRODUCT_FAIL, payload : error.message})
    }


  
}

export default getProductAction