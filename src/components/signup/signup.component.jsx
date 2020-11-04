import React from 'react';
import './signup.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
class SignUp extends React.Component {
 constructor(){
     super();
     this.state = {
         displayName: '',
         email: '',
         password : '',
         confirmPassword: ''
     }
 }

 componentDidMount(){

 }
handleSubmit = async event => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword}  =  this.state;

    if(password != confirmPassword){
        alert('password and confirm password not matched.');
        return;
    } 

    try{
     const {user}  = await auth.createUserWithEmailAndPassword(email, password); 
     await createUserProfileDocument(user,{displayName});
     this.setState({
        displayName: '',
        email: '',
        password : '',
        confirmPassword: ''
    });
    }
    catch(e){
        console.error(e.message)
    }
}

handleChange = e => {
    const { name , value }  = e.target;
    this.setState({[name] : value});
}

 render(){
     const {displayName,email,password,confirmPassword}  =  this.state;
     return (
         <div className="signup">
           <h2 className="title">I do not have a account</h2>    
           <span>Sign up with your email and password</span>  
           <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Dispaly Name"
                required
              ></FormInput>
                <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              ></FormInput>

               <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
              ></FormInput>

              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              ></FormInput>

              <CustomBtn type="submit">SIGN UP</CustomBtn>

           </form>
         </div>
     );
 }
}



export default SignUp;