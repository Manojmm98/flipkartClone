import * as ActionType from '../contraints/productConstants'



const getproductReducer = (state={products : []},action) => {

    switch (action.type) {
        case ActionType.GET_PRODUCT_SUCESS:
         return {products: action.payload}
        case ActionType.GET_PRODUCT_FAIL :
        return {error : action.payload}  
        default: return state
           
    }

    
  
}

export default getproductReducer