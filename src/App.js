import  {Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import  Signing  from './pages/signing/signing.component';
import { auth, createUserProfileDocument} from './firebase/firebase.util'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  subcriptions = null
  componentDidMount(){
    this.subcriptions =  auth.onAuthStateChanged(async user=>{
      if(user){
        const userExists = await createUserProfileDocument(user);
        userExists.onSnapshot(snapShort=>{
          this.setState({
            currentUser: {
              id: snapShort.id,
              ...snapShort.data()
            }
          },()=>console.error(this.state.currentUser));
          
        });
      }
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount(){
    console.log('removed server')
    this.subcriptions();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={Signing} />
        </Switch>
      
      </div>
    );
  }
 
}

export default App;
