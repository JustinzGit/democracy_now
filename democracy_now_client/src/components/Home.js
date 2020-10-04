import React, { Component } from 'react'
import Login from './auth/Login'
import Registration from './auth/Registration'

class Home extends Component {
    
    handleAuth = (userData) => {
        this.props.handleLogin(userData)

        // How we redirect
        this.props.history.push("/dashboard")
    }

    handleLogoutClick = () => {
        this.props.handleLogout()

        fetch("http://localhost:3001/logout", {credentials: "include"})
        .then(response => {
            this.props.handleLogout()
        })
        .catch(error => {
            console.log("Logout Error", error)
        })
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleAuth={this.handleAuth}/>
                <hr></hr>
                <Login handleAuth={this.handleAuth}/>
                <hr></hr>
                <button onClick={this.handleLogoutClick}>Log Out</button>
            </div>
        )
    }
}

export default Home