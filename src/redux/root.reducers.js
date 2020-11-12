import { combineReducers } from 'redux';
import  CartReducers from '../redux/cart/cart.reducers';
import { UserReducers } from '../redux/user/user.reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const configPersist = {
 key: 'root',
 storage,
 whitelist: ['cart']
};
const rootReducer = combineReducers({
    cart: CartReducers,
    user:UserReducers
  });
  
  export default persistReducer(configPersist,rootReducer);