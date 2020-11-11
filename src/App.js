import  {Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import  Signing  from './pages/signing/signing.component';
import { auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import { addUser} from '../src/redux/user/user.actions';
//>> App 
class App extends React.Component {
  subcriptions = null;
  componentDidMount(){
    //Subcription ...
    const { addUser } = this.props;
    this.subcriptions =  auth.onAuthStateChanged(async user=>{
      if(user){
        const userExists = await createUserProfileDocument(user);
        userExists.onSnapshot(snapShort=>{
          addUser({id: snapShort.id,...snapShort.data()});
        });
      }
      addUser(user);
    });
  }

  componentWillUnmount(){
    //>> Un Subscribe
    this.subcriptions();
  }
  //Render...
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={Signing} />
        </Switch>
      
      </div>
    );
  }
 
}


const propsToState = (dispatch)=> ({
  addUser: user => dispatch(addUser(user))
})

export default connect(null, propsToState) (App);
