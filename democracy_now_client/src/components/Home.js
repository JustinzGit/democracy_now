import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
// import Login from './auth/Login'
// import Signup from './auth/Signup'

class Home extends Component {
    
    // handleAuth = (userData) => {
    //     this.props.handleLogin(userData)
    //     this.props.history.push("/dashboard")
    // }

    handleLogoutClick = () => {
        // this.props.handleLogout()

        fetch("http://localhost:3001/logout", {credentials: "include"})
        .then(response => {
            this.props.handleLogout()
            this.props.history.push("/login")
        })
        .catch(error => {
            console.log("Logout Error", error)
        })
    }

    handleLoginClick = () => {
        this.props.history.push("/login")
    }

    render(){
        console.log("HOME = HOME WAS HIT")
        console.log("HOME = Logged In Status:", this.props.loggedInStatus)
        return(
            <div>
                <h1>Home Page</h1>
                <h3>{this.props.loggedInStatus ? "Logged In" : "Not Logged In"}</h3>
                {this.props.loggedInStatus ? <button onClick={this.handleLogoutClick}>Log Out</button> : <button onClick={this.handleLoginClick}>Log In</button>}
            </div>
        )
    }
}

export default Home