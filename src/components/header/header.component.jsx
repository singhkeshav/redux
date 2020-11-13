import  './header.style.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon  from '../card-icon/card-icon.component';
import CartDropDown  from '../card-dropdown/card-dropdown.component';
import {connect} from 'react-redux';
import {CartHidden} from '../../redux/cart/cart.selectors';
import { UserSelectors} from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
const Header  = ({currentUser, hidden}) => (
    <div className="header">
     <Link  className="logo-container" to="/">
         <Logo className='logo' />
     </Link>
     <div className="options">
       <Link  className='option' to="/">Shop</Link>
       <Link  className='option' to="/contact">Contact</Link>
       {
         currentUser ? 
         <div className="option" onClick={()=> auth.signOut()}> Sign Out</div>
         : 
         <Link  className='option' to="/signin">Sign In</Link>
       }
      <CartIcon/>
     </div>
     {
       hidden ? null 
       :
       <CartDropDown/>
     }
    
    </div>
);
const mapStateToProps  = createStructuredSelector({
  hidden: CartHidden,
  currentUser: UserSelectors
})
export default connect(mapStateToProps)(Header);