import React from 'react'
import AsteroidCard from './AsteroidCard'

const Asteroids = ({ asteroids }) => {
    return(
        <div id="asteroids">
            <h1>Today's Asteroids</h1>
            <h3>(Near Earth Object Web Service)</h3>
            <h4>There are a total of {asteroids.length} asteroids approaching Earth today</h4>
            {asteroids.map((data, id) => <AsteroidCard key={id} asteroidData={data} />)}
        </div>
    )
}

export default Asteroids