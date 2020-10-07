import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// import Dashboard from './components/Dashboard';
import Home from './components/Home'
import Login from './components/auth/Login'
// import PrivateRoute from './components/auth/PrivateRoute'

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
    this.setState({
      loggedInStatus: true,
      user: userData
    }, () => console.log("User Logged In", this.state))
  }
  
  handleLogout = () => {
    this.setState({
      loggedInStatus: false, 
      user: {}
    })
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
  
  // Call setState immediately
  // "User wont see intermediate state"
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
          <Route 
            exact path={'/'}
            render={(props) => 
              <Home {...props} 
                loggedInStatus={this.state.loggedInStatus} 
                handleLogout={this.handleLogout}/>} />
          

          <Route
            exact path={'/login'}
            render={(props)=> 
              <Login  {...props}
                loggedInStatus={this.state.loggedInStatus}
                handleLogin={this.handleLogin}/>} />
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
