import React from 'react';
import './card-dropdown.style.scss';
import  CustomBtn from '../custom-button/custom-button.component';
import  CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect';
const CartDropDown = ({cartItems}) => (
    
    <div className="cart-dropdown">
       <div  className="cart-items">
        {
            cartItems.map(item=> <CartItem  key={item.id} {...item}/>)
        }     
       </div>
       <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps, null) (CartDropDown);