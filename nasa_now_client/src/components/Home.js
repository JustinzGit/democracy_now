import React from 'react'
import {Link} from 'react-router-dom'

import NasaLogo from './NasaLogo'
import LogoutButton from './LogoutButton'

const Home = () => {
    return(
        <div id="home">
            <div>
                <NasaLogo />              
                <Link to='/apod'>Astronomy Picture of the Day</Link>
                <Link to='/asteroids'>Today's Asteroids</Link>
                <LogoutButton />
            </div>
        </div>
    )
}

export default Home