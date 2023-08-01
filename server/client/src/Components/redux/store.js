import {createStore,  applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {getProductDetailsReducer, getproductReducer} from './reducers/getproductReducer';
import cartReducer from './reducers/cartReducer';

 

const reducer= combineReducers({
    getproducts: getproductReducer,
    getproductdetails : getProductDetailsReducer,
    cart : cartReducer
}
)

const middleware = [thunk]


const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;