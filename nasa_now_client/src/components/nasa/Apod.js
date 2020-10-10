import React from 'react'
import { DateTime } from "luxon"

const Apod = ({ astronomyPic }) => {
    return(
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{DateTime.fromISO(astronomyPic.date).toFormat('LLLL d, y')}</h2>
            <h2>{astronomyPic.title}</h2>
            <img alt="nasa_apod" src={astronomyPic.hdurl} style={{maxWidth: "100%", width: 1000, height: 'auto'}} ></img>
            <p>{astronomyPic.explanation}</p> 
        </div>
    )
}

export default Apod