import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import currentLogin from './actions/currentLogin'
import handleLogout from './actions/handleLogout'

import Home from './components/Home'
import NavBar from './components/NavBar'

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PrivateRoute from './components/auth/PrivateRoute';

import Apod from './components/nasa/Apod'
import Asteroids from './components/nasa/Asteroids'

class App extends Component {

  componentDidMount() {
    this.props.currentLogin()
  }
  
  render(){
    if(!this.props.requestingData){
      return (
        <div className="app">
          {this.props.loggedInStatus && <NavBar />}

          <Switch>
            <PrivateRoute
              exact path={'/'} 
              component={Home} />

            <PrivateRoute
              exact path={'/apod'} 
              component={Apod} />

            <PrivateRoute
              exact path={'/asteroids'} 
              component={Asteroids} />
            
            <Route
              exact path={'/login'}
              component={Login} />

            <Route
              exact path={'/signup'}
              component={Signup} />
          </Switch>

          {this.props.loggedInStatus && <p><button onClick={this.props.handleLogout}>Log Out</button></p>}
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

export default connect( mapStateToProps , { handleLogout, currentLogin })(App);
