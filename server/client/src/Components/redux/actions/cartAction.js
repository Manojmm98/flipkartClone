import axios from "axios";
import * as ActionType from '../contraints/cartConstants'


const URL = ''

export const AddToCart = (id,quantity) => async(dispatch)=>{
    try {
       const {data} = await axios.get(`${URL}/products/${id}`) 

       dispatch({type:ActionType.ADD_TO_CART, payload:{...data,quantity}})
    }
    catch(error){
        dispatch({type:ActionType.ADD_TO_CART_ERROR, payload:error.message})
    }
}

export const RemoveFromcart =(id)=>(dispatch)=>{

    dispatch({type:ActionType.REMOVE_FROM_CART,payload:id})

}