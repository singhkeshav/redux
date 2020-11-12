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



//Remove Cart Item 


export const removeCartItem = (cartItems, id) => cartItems.filter(row => row.id !== id);


//substractCartItemUtils
export const substractCartItemUtils = (cartItem, subItem) =>{
 const existCartItem =  cartItem.find(row=> row.id === subItem.id);
 debugger
 if(existCartItem && existCartItem.quanity === 1){
    return cartItem.filter(row=> row.id!==subItem.id);
 }
 return cartItem.map(row =>  row.id === subItem.id ? {...row, quanity: row.quanity-1} : row);
}