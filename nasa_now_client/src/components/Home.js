import React from 'react'
import { Redirect } from 'react-router-dom'


const Home = ({ handleLogout }) => {

    return(
        <div>
            <h1>Home Page</h1>
            <p><button onClick={() => <Redirect to='/apod' />}>Astronomy Picture of the Day</button></p>
            <p><button onClick={() => this.props.history.push('/asteroids') }>Discover Asteroids</button></p>
            <p><button onClick={handleLogout}>Log Out</button></p>
        </div>
    )
}

export default Home