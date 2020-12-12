import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from "react";
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        await userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            }     
          )
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
          <Route path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)  }></Route>  
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
