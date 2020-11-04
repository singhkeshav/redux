import { combineReducers } from 'redux';

import  CartReducers from '../redux/cart/cart.reducers';
const rootReducer = combineReducers({
    cart: CartReducers
  });
  
  export default rootReducer;