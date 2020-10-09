import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import handleLogout from './actions/handleLogout'
import handleLogin from './actions/handleLogin'
import handleSignup from './actions/handleSignup'
import currentLogin from './actions/currentLogin'

import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PrivateRoute from './components/auth/PrivateRoute';

import Apod from './components/nasa/Apod'
import Asteroids from './components/nasa/Asteroids'

class App extends Component {
  handleLogout = () => {
    this.props.handleLogout()
  }

  handleLogin = (userData) => {
    this.props.handleLogin(userData)
  }

  handleSignup = (userData) => {
    this.props.handleSignup(userData)
  }
  
  componentDidMount() {
    this.props.currentLogin()
  }
  
  render(){
    if(!this.props.requestingData){
      return (
        <div className="app">
        <Router>
          <Switch>
            <PrivateRoute
              exact path={'/'} 
              component={Home}
              loggedInStatus={this.props.loggedInStatus}
              handleLogout={this.handleLogout} />

            <PrivateRoute
              exact path={'/apod'} 
              component={Apod}
              loggedInStatus={this.props.loggedInStatus} />

            <PrivateRoute
              exact path={'/asteroids'} 
              component={Asteroids}
              loggedInStatus={this.props.loggedInStatus} />
            
            <Route
              exact path={'/login'}
              render={(props) => 
                <Login  {...props}
                  loggedInStatus={this.props.loggedInStatus}
                  handleLogin={this.handleLogin}/>} />

            <Route
              exact path={'/signup'}
              render={(props) => 
                <Signup {...props}
                  handleSignup={this.handleSignup}
                  error={this.state.error} />} />
          </Switch>
        </Router>
      </div>
      );
    }
    else {
      return(<div className="app">Loading Data</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus,
    requestingData: state.requestingData
  }
}

export default connect( mapStateToProps , { handleLogout, handleSignup, currentLogin, handleLogin })(App);
