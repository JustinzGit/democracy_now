import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home'

class App extends Component {
  constructor(){
    super()

    this.state = {
      loggedInStatus: "Not Logged In",
      user: {}
    }
  }

  handleLogin = (userData) => {
    this.setState({
      loggedInStatus: "Logged In",
      user: userData
    })
  }

  handleLogout = () => {
    this.setState({loggedInStatus: "Not Logged In", user: {}})
  }

  loggedInStatus = () => {
    fetch("http://localhost:3001/current_login", {credentials: "include"})
    .then(response => response.json())
    .then(railsResp => {
      if (railsResp.logged_in && this.state.loggedInStatus === "Not Logged In"){
        console.log("Logged In Status", railsResp)
        this.setState({ loggedInStatus: "Logged In", user: railsResp.user})
      }
      else if (!railsResp.logged_in && this.state.loggedInStatus === "Logged In"){
        this.setState({ loggedInStatus: "Not Logged In", user: {}})
      }
    })
  }

  componentDidMount() {
    this.loggedInStatus()
  }

  render(){
    return (
      <div className="app">
        <Router>

          <Route 
            exact path={'/'} 
            render={props => (<Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />)}/>

          <Route 
            exact path={'/dashboard'} 
            render={props => (<Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />)}/>
  
        </Router>
      </div>
    );
  }
}

export default App;
