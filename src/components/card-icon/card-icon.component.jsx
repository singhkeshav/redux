import React from 'react';
import './card-icon.style.scss';
import { ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCardHidden,itemCount}) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
      <ShopingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCardHidden: ()=>dispatch(toggleCardHidden())
});


const mapStateToProps = ({cart: {cartItems}}) =>({
  itemCount: cartItems.reduce((firstKey,secondKey) => firstKey + secondKey.quanity,0)
 })




export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);