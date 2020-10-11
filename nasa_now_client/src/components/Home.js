import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../nasa-logo.png'

const Home = () => {
    return(
        <div id="home">
            <img src={Logo} alt="nasa_logo" style={{maxWidth: "100%", width: 800, height: 'auto'}}></img>
            <div>
                <h1>NASA NOW</h1>
                <Link to='/apod'>Astronomy Picture of the Day</Link>
                <Link to='/asteroids'>Today's Asteroids</Link>
            </div>
        </div>
    )
}

export default Home