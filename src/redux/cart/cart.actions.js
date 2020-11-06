import CartActionTypes from './cart.type';
//Toggle Card Hidden
export const toggleCardHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Add Item
export const addItem = item =>({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});