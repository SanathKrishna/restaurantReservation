import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import LoginMerchant from "./components/merchantlogin.component";
import AppointmentApp from "./components/reservation.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dine-Out</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className ="nav-item">
                <Link className = "nav-link" to ={"/merchant-signin"}>Merchant Sign in </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path = "/merchant-signin" component ={LoginMerchant}/>
            <Route path="/restaurant/:id" component={RestaurantDetails}/>
            <Route path = "/reservation/:id" component = {AppointmentApp}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
