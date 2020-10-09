import React, { Component } from 'react'

class Home extends Component {

    handleLogoutClick = () => {
        this.props.handleLogout()
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <p><button onClick={() => this.props.history.push('/apod') }>Astronomy Picture of the Day</button></p>
                <p><button onClick={() => this.props.history.push('/asteroids') }>Discover Asteroids</button></p>
                <p><button onClick={this.handleLogoutClick}>Log Out</button></p>
            </div>
        )
    }
}

export default Home