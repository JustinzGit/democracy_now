import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import currentLogin from './actions/auth/currentLogin'
import handleLogout from './actions/auth/handleLogout'

import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

import ApodContainer from './containers/nasa/ApodContainer'
import AsteroidsContainer from './containers/nasa/AsteroidsContainer';

import {Container, Row, Col } from 'react-bootstrap'

class App extends Component {

  componentDidMount() {
    this.props.currentLogin()
  }
  
  render(){
    if(!this.props.requestingData){
      return (
        <div className="app">
          <Container>
            <Row>
              <Col>
                <Switch>
                  <PrivateRoute
                    exact path={'/'} 
                    component={Home} />

                  <PrivateRoute
                    exact path={'/apod'} 
                    component={ApodContainer} />

                  <PrivateRoute
                    exact path={'/asteroids'} 
                    component={AsteroidsContainer} />
                  
                  <Route
                    exact path={'/login'}
                    component={Login} />

                  <Route
                    exact path={'/signup'}
                    component={Signup} />
                </Switch>

                {this.props.loggedInStatus && <p><button onClick={this.props.handleLogout}>Log Out</button></p>}
              </Col>
            </Row>
          </Container>
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
    loggedInStatus: state.user.loggedInStatus,
    requestingData: state.user.requestingData
  }
}

export default connect( mapStateToProps , { handleLogout, currentLogin })(App);
