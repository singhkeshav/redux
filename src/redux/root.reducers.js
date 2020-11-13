import { combineReducers } from 'redux';
import  CartReducers from '../redux/cart/cart.reducers';
import { UserReducers } from '../redux/user/user.reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  directoryReducers  from './directory/directory.reducers';
import shopReducers from './shop/shop.reducers';
const configPersist = {
 key: 'root',
 storage,
 whitelist: ['cart']
};
const rootReducer = combineReducers({
    cart: CartReducers,
    user:UserReducers,
    directory:directoryReducers,
    shop:shopReducers
  });
  
  export default persistReducer(configPersist,rootReducer);