import  './signing.style.scss'
import React from 'react';
import Signin  from '../../components/signin/singin.component';
import Signup  from '../../components/signup/signup.component';
const Signing = () => (
    <div className="signing">
        <Signin />
        <Signup/>
    </div>
);

export default Signing;