import { combineReducers } from 'redux';
import  CartReducers from '../redux/cart/cart.reducers';
import { UserReducers } from '../redux/user/user.reducers';
const rootReducer = combineReducers({
    cart: CartReducers,
    user:UserReducers
  });
  
  export default rootReducer;