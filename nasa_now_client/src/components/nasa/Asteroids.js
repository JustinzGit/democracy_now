import React from 'react'
import AsteroidCard from './AsteroidCard'

const Asteroids = ({ asteroids }) => {
    return(
        <div>
            <h1>Asteroids - (Near Earth Object Web Service)</h1>
            <p>There are a total of {asteroids.length} asteroids approaching Earth today</p>
            {asteroids.map((data, id) => <AsteroidCard key={id} asteroidData={data} />)}
        </div>
    )
}

export default Asteroids