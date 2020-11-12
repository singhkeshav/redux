import React from 'react';
import './checkout-item.style.scss';
import { removeItem,addItem,substractCartItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const CheckoutItem = ({ cartItem, removeItem,addItem,substractCartItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl} />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={()=> substractCartItem(cartItem)}>&#10094;</div>
           <span className="value">{cartItem.quanity}</span> 
            <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
           
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => removeItem(cartItem)}>
            &#10005;
        </div>
    </div>
);

const propsToDispatch = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    substractCartItem: item => dispatch(substractCartItem(item))
})
export default connect(null, propsToDispatch)(CheckoutItem);