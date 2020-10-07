import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PrivateRoute from './components/auth/PrivateRoute';

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      loggedInStatus: false,
      user: {},
      loadingComplete: false
    }
  }
  
  handleLogin = (userData) => {
    fetch("http://localhost:3001/sessions", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 201){
                console.log("LOGIN PROPS", this.props)
                this.setState({ loggedInStatus: true, user: userData })
                
            }
            else {
                console.log("Login Error", apiData.error)
            }
        })
        .catch(error => {
            console.log("Login Error", error)
        })
  }
  
  handleLogout = () => {
    fetch("http://localhost:3001/logout", {credentials: "include"})
        .then(() => {
            this.setState({ loggedInStatus: false, user: {} })
        })
        .catch(error => {
            console.log("Logout Error", error)
        })
  }

  handleSignup = (userData) => {
    this.setState({ loggedInStatus: true, user: userData })
  }
  
  loggedInStatus = () => {
    fetch("http://localhost:3001/current_login", {credentials: "include"})
    .then(response => response.json())
    .then(apiData => {
      // IF LOGGED IN - API
      // IF NOT LOGGED IN VIA STATE
      if (apiData.logged_in && !this.state.loggedInStatus){
        console.log("APP = (1) FETCH WAS HIT") 
        this.setState({ loggedInStatus: true, user: apiData.user, loadingComplete: true }, () => console.log("Logged In Status", this.state))
      }
      // IF NOT LOGGED IN - API
      // IF LOGGED IN VIA STATE
      else if (!apiData.logged_in && this.state.loggedInStatus){
        console.log("APP = (2) FETCH WAS HIT")
        this.setState({ loggedInStatus: false, user: {}, loadingComplete: true }, () => console.log("Logged In Status", this.state))
      }
      // IF LOGGED IN - API
      // IF LOGGED IN VIA STATE 
      else if (apiData.logged_in && this.state.loggedInStatus){
        console.log("APP = (3) FETCH WAS HIT")
        this.setState({ loggedInStatus: true, user: apiData.user, loadingComplete: true }, () => console.log("Logged In Status", this.state))
      }
      // IF NOT LOGGED IN API
      // IF NOT LOGGED IN VIA STATE
      else {
        console.log("APP = (3) FETCH WAS HIT")
        this.setState({ loggedInStatus: false, user: {}, loadingComplete: true }, () => console.log("Logged In Status", this.state))
      }
    })
  }
  
  componentDidMount() {
    this.loggedInStatus()
  }
  
  render(){
    if(this.state.loadingComplete){
      console.log("APP = LOADING COMPLETE")
      console.log("APP = LOGGED IN STATUS", this.state.loggedInStatus)
      return (
        <div className="app">
        <Router>
          <PrivateRoute
            exact path={'/'} 
            component={Home}
            loggedInStatus={this.state.loggedInStatus}
            handleLogout={this.handleLogout} />
          

          <Route
            exact path={'/login'}
            render={(props) => 
              <Login  {...props}
                loggedInStatus={this.state.loggedInStatus}
                handleLogin={this.handleLogin}/>} />

          <Route
            exact path={'/signup'}
            render={(props) => 
              <Signup {...props}
                handleSignup={this.handleSignup}
                error={this.state.error} />} />

        </Router>
      </div>
      );
    }
    else {
      return(<div className="app">Loading Data</div>)
    }
  }
}

export default App;
