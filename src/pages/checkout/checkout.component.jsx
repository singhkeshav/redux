import React from 'react';
import './checkout.component.scss';
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems,CartItemTotal } from '../../redux/cart/cart.selectors'
const Checkout = ({cartItems, total}) => (
    <div className="checkout-page">
        {console.error(cartItems)}
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>

            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(row => {
                console.error(row.name)
            })
        }

        <div className="total">
    <span>TOTAL$:{total}</span>
        </div>
    </div>
);


const stateToProps  = createStructuredSelector({
    cartItems: selectCartItems,
    total: CartItemTotal
})

export default connect(stateToProps)(Checkout);