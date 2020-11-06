export const addItemToCart = (cartItems, cartItemAdd) => {
  const existCartItem = cartItems.find(cartItem=> cartItem.id === cartItemAdd.id);
  // If Exist then 
  if(existCartItem){
    // Increased Quantity existing Item....
   return cartItems.map(cartItem=>cartItem.id === cartItemAdd.id ?  {...cartItem,quanity : cartItem.quanity+1} :  cartItem );
  }
  // Else Return First Element...
  return [...cartItems,{...cartItemAdd, quanity: 1}];
};