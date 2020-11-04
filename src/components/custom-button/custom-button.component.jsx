import './custom-button.style.scss';
import React from 'react';
const CustomBtn = ({children , isGoogleSignIn, ...otherProps}) => (
   <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
     {children}
   </button>
);

export default CustomBtn;