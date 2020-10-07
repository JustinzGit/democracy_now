import React, { Component } from 'react'

class Home extends Component {

    handleLogoutClick = () => {
        this.props.handleLogout()
        this.props.history.push("/login")
    }

    render(){
        console.log("HOME = HOME WAS HIT")
        console.log("HOME = Logged In Status:", this.props.loggedInStatus)
        return(
            <div>
                <h1>Home Page</h1>
                <h3>{this.props.loggedInStatus ? "Logged In" : "Not Logged In"}</h3>
                <button onClick={this.handleLogoutClick}>Log Out</button>
            </div>
        )
    }
}

export default Home