import * as ActionType from '../contraints/productConstants'



export const getproductReducer = (state={products : []},action) => {

    switch (action.type) {
        case ActionType.GET_PRODUCT_SUCESS:
         return {products: action.payload}
        case ActionType.GET_PRODUCT_FAIL :
        return {error : action.payload}  
        default: return state
           
    }

}

export const getProductDetailsReducer = (state={products : {}},action) =>{
    

    switch (action.type) {
        case ActionType.GET_PRODUCT_DETAIL_REQUEST:
         return {loading:true}
        case ActionType.GET_PRODUCT_DETAIL_SUCESS :
        return {loading:false,products: action.payload} 
        case ActionType.GET_PRODUCT_DETAIL_FAIL :
            return {loading:false,error: action.payload} 
        case ActionType.GET_PRODUCT_DETAIL_RESET :
            return {products : {} } 
        default: return state
           
    }
}
