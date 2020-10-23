import React from 'react'
import { Card } from 'react-bootstrap'
import { DateTime } from "luxon"

const AsteroidCard = ({ asteroidData }) => {
    let approachTime 
    let approachDateTime = asteroidData.close_approach_data[0].close_approach_date_full

    if (approachDateTime){
        approachTime = approachDateTime.split(" ")[1]
        approachTime = DateTime.fromISO(approachTime).toFormat('t')
    }
    else {
        approachTime = "N/A"
    }
    

    return(
        <div id="card">
            <Card>
                <Card.Header>Asteroid Name: {asteroidData.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Approach Time: {approachTime}</Card.Title>
                    <Card.Title>Potentially Hazardous? {asteroidData.is_potentially_hazardous_asteroid ? "Yes" : "No"}</Card.Title>
                    <Card.Text>
                        <b>Diameter</b><br></br>
                            <li>kilometers: {parseFloat(asteroidData.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}<br></br></li>
                            <li>Meters: {parseFloat(asteroidData.estimated_diameter.meters.estimated_diameter_max).toFixed(2)}<br></br></li>
                            <li>Miles: {parseFloat(asteroidData.estimated_diameter.miles.estimated_diameter_max).toFixed(2)}<br></br></li>
                            <li>Feet: {parseFloat(asteroidData.estimated_diameter.feet.estimated_diameter_max).toFixed(2)}<br></br></li>
                        
                        <br></br>
                        <b>Velocity</b><br></br>
                            <li>Kilometers per hour: {parseFloat(asteroidData.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)}<br></br></li>
                            <li>Miles per hour: {parseFloat(asteroidData.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)}<br></br></li>
                            <li>Kilometers per second: {parseFloat(asteroidData.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2)}<br></br></li>
                     
                        <br></br>
                        <b>Miss Distance</b><br></br>
                            <li>Astronomical: {parseFloat(asteroidData.close_approach_data[0].miss_distance.astronomical).toFixed(2)}<br></br></li>
                            <li>Lunar: {parseFloat(asteroidData.close_approach_data[0].miss_distance.lunar).toFixed(2)}<br></br></li>
                            <li>Kilometers: {parseFloat(asteroidData.close_approach_data[0].miss_distance.kilometers).toFixed(2)}<br></br></li>
                            <li>Miles: {parseFloat(asteroidData.close_approach_data[0].miss_distance.miles).toFixed(2)}<br></br></li>
                   
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AsteroidCard