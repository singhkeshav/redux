import  './signin.style.scss';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
class Signin extends React.Component {

    constructor(props){
        super(props);
        //Super 
        this.state = {
            email : '',
            password: ''
        }
    }
   
     //Submit Handler
     submitHandler = async e => {
         e.preventDefault();
         const { email, password }  = this.state;
         try{
            const {user} = await auth.signInWithEmailAndPassword(email, password);
        
         } catch(e){
             console.error(e)
         }
       
     }

     //Handle Change
     handleChange  = e => {
         let { name , value }  = e.target;
         this.setState({[name]: value});
     }
    render(){
        return (
           <div className="sign-in">
               <h2>I already have an account</h2>
               <span> Sign in with your email and password</span>
               <form onSubmit={this.submitHandler}>
                   <FormInput type="text" name="email" label="email" value={this.state.email} handleChange={this.handleChange}  required/>
                  

                   <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                  <div className="buttons">
                   <CustomBtn type="submit" value="Submit Form"> Submit Form</CustomBtn>
                   <CustomBtn onClick={signInWithGoogle} isGoogleSignIn> Signin With Google</CustomBtn>
                  </div>
                  
               </form>
           </div>
        );
    }
}



export default Signin;