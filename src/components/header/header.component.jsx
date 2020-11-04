import  './header.style.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon  from '../card-icon/card-icon.component';
import CartDropDown  from '../card-dropdown/card-dropdown.component';
import {connect} from 'react-redux';

const Header  = ({currentUser, hidden}) => (
    <div className="header">
     <Link  className="logo-container" to="/">
         <Logo className='logo' />
     </Link>
     <div className="options">
       <Link  className='option' to="/shop">Shop</Link>
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
const mapStateToProps  = ({cart: {hidden}}) =>({
  hidden
})
export default connect(mapStateToProps)(Header);