import React from 'react'

const AsteroidCard = ({ asteroidData }) => {    
    return(
        <div>
            <p>Asteroid Name: {asteroidData.name}</p>
            <p>Approach Date: {asteroidData.close_approach_data[0].close_approach_date_full}</p>
            <p>Potentially Hazardous? {asteroidData.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>

            Diameter (Maximum)
            <ul>
                <li>kilometers: {asteroidData.estimated_diameter.kilometers.estimated_diameter_max} </li>
                <li>Meters: {asteroidData.estimated_diameter.meters.estimated_diameter_max} </li>
                <li>Miles: {asteroidData.estimated_diameter.miles.estimated_diameter_max} </li>
                <li>Feet: {asteroidData.estimated_diameter.feet.estimated_diameter_max} </li>
            </ul>

            Velocity
            <ul>
                <li>Kilometers per hour: {asteroidData.close_approach_data[0].relative_velocity.kilometers_per_hour}</li>
                <li>Miles per hour: {asteroidData.close_approach_data[0].relative_velocity.miles_per_hour}</li>
                <li>Kilometers per second: {asteroidData.close_approach_data[0].relative_velocity.kilometers_per_second}</li>
            </ul>

            Miss Distance
            <ul>
                <li>Astronomical: {asteroidData.close_approach_data[0].miss_distance.astronomical}</li>
                <li>Lunar: {asteroidData.close_approach_data[0].miss_distance.lunar}</li>
                <li>Kilometers: {asteroidData.close_approach_data[0].miss_distance.kilometers}</li>
                <li>Miles: {asteroidData.close_approach_data[0].miss_distance.miles}</li>
            </ul>

            <hr></hr>
        </div>
    )
}

export default AsteroidCard