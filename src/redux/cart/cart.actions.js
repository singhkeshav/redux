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

//Remove Cart Item
export const  removeItem = item =>  ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
})


//SUBSTRACT_CART_ITEM
export const substractCartItem = item => ({
  type: CartActionTypes.SUBSTRACT_CART_ITEM,
  payload:  item
})