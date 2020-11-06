import React from 'react';
import { connect } from 'react-redux';
import './cart-item.style.scss';

const CartItem = (props) => (
  <div className="cart-item">
    <img src={props.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{props.name}</span>
      <span className="price">{props.quanity} * ${props.price}</span>
    </div>
  </div>
);


export default CartItem;