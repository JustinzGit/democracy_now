import React, { Component } from 'react'

class Home extends Component {

    handleLogoutClick = () => {
        this.props.handleLogout()
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handleLogoutClick}>Log Out</button>
            </div>
        )
    }
}

export default Home