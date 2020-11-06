import CartActionTypes from './cart.type';
import { addItemToCart } from './cart.util'
const INITIAL_STATE = {
    hidden :  true,
    cartItems: []
};
// Cart Reducers....
const cartReducers = (state = INITIAL_STATE , action) =>{
   switch(action.type){
     // Toggle Event ....
       case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        };
        // Add New Cart...
        case CartActionTypes.ADD_CART_ITEM:
        return {
          ...state,
          cartItems:  addItemToCart(state.cartItems,action.payload)
        };
        default:
          return state;
   }
}
// Cart Reducers
export default cartReducers;