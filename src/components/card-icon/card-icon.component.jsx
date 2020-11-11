import React from 'react';
import './card-icon.style.scss';
import { ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';
const CartIcon = ({toggleCardHidden,itemCount}) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
      <ShopingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCardHidden: ()=>dispatch(toggleCardHidden())
});


const mapStateToProps = (state) =>({
  itemCount: selectCartItemsCount(state)
 })




export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);