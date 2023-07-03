import {createStore,  applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import getproductReducer from './reducers/getproductReducer';

 

const reducer= combineReducers({
    getproducts: getproductReducer
}
)

const middleware = [thunk]


const store = createStore(
    reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;