import axios from "axios"
import * as ActionType from '../contraints/productConstants'



const URL = 'http://localhost:8080'

 export const getProductAction = () => async(dispatch) => {

    try{

    
    const {data} = await axios.get(`${URL}/products`)
   
   console.log(data);
    dispatch({type:ActionType.GET_PRODUCT_SUCESS, payload:data})
    }
    catch(error){
        dispatch({type:ActionType.GET_PRODUCT_FAIL, payload : error.message})
    } 
}



export const getProductDetail = (id)=>async(dispatch) => {
    try {
        dispatch({type:ActionType.GET_PRODUCT_DETAIL_REQUEST})
        const {data} = await axios.get(`${URL}/products/${id}`)
        dispatch({type:ActionType.GET_PRODUCT_DETAIL_SUCESS, payload : data})
    }
    catch (error) {
        dispatch({type:ActionType.GET_PRODUCT_DETAIL_FAIL, payload : error.message})
    }
}
