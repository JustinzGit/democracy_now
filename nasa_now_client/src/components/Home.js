import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/apod'>Astronomy Picture of the Day</Link><br></br>
            <Link to='/asteroids'>Today's Asteroids</Link>
        </div>
    )
}

export default Home