import {combineReducers } from 'redux'
import { productsReducer, selectedProductReducer,authReducer } from './productReducer';
import {cartReducer} from './cartReducer';
import {searchReducer }from './searchCategoryReducer';



const reducers = combineReducers({
    allProducts:productsReducer,
    product:selectedProductReducer,
    auth: authReducer,
    cart: cartReducer,
    search:searchReducer,
    
   
})
export default reducers