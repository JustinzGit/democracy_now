import React, { Component } from 'react'

class Home extends Component {

    handleLogoutClick = () => {
        this.props.handleLogout()
    }

    render(){
        console.log("HOME = HOME WAS HIT")
        console.log("HOME = Logged In Status:", this.props.loggedInStatus)
        return(
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handleLogoutClick}>Log Out</button>
            </div>
        )
    }
}

export default Home