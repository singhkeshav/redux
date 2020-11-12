import React from 'react';
import './card-dropdown.style.scss';
import  CustomBtn from '../custom-button/custom-button.component';
import  CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect';
import {withRouter } from 'react-router-dom';
import {  toggleCardHidden } from '../../redux/cart/cart.actions';
const CartDropDown = ({cartItems, history, dispatch}) => (
    
    <div className="cart-dropdown">
       <div  className="cart-items">
        {
         cartItems.length>0 ?    cartItems.map(item=> <CartItem  key={item.id} {...item}/>) : <span className="empty-message">Your Cart is Empty</span>
        }     
       </div>
       <CustomBtn onClick={()=> {history.push('/checkout'); dispatch(toggleCardHidden());}}>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null) (CartDropDown));