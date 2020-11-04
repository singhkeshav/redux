import React from 'react';
import './card-dropdown.style.scss';
import  CustomBtn from '../custom-button/custom-button.component'

const CartDropDown = () => (
    <div className="cart-dropdown">
       <div  className="cart-items"/>
       <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

export default CartDropDown;