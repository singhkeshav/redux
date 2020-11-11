import  { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems  = createSelector(
[selectCart],
(cart)=> cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>   cartItems.reduce((firstKey,secondKey) => firstKey + secondKey.quanity,0)     
)


export const CartHidden = createSelector(
   [selectCart],
   (cart) => cart.hidden 
);


export const CartItemTotal = createSelector(
    [selectCartItems],
    (cartItems) =>   cartItems.reduce((firstKey,secondKey) => firstKey + secondKey.quanity * secondKey.price,0)     
)