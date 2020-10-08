import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PrivateRoute from './components/auth/PrivateRoute';

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      loadingComplete: false,
      loggedInStatus: false,
      user: {}
    }
  }
  
  handleLogin = (userData) => {
    this.setState({ loggedInStatus: true, user: userData })
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
        this.setState({ loggedInStatus: true, user: apiData.user, loadingComplete: true })
      }
      // IF NOT LOGGED IN - API
      // IF LOGGED IN VIA STATE
      else if (!apiData.logged_in && this.state.loggedInStatus){
        this.setState({ loggedInStatus: false, user: {}, loadingComplete: true })
      }
      // IF LOGGED IN - API
      // IF LOGGED IN VIA STATE 
      else if (apiData.logged_in && this.state.loggedInStatus){
        this.setState({ loggedInStatus: true, user: apiData.user, loadingComplete: true })
      }
      // IF NOT LOGGED IN API
      // IF NOT LOGGED IN VIA STATE
      else {
        this.setState({ loggedInStatus: false, user: {}, loadingComplete: true })
      }
    })
  }
  
  componentDidMount() {
    this.loggedInStatus()
  }
  
  render(){
    if(this.state.loadingComplete){
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
