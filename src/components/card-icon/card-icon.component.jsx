import React from 'react';
import './card-icon.style.scss';
import { ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCardHidden}) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
      <ShopingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCardHidden: ()=>dispatch(toggleCardHidden())
});






export default connect(null,mapDispatchToProps)(CartIcon);