import React from 'react'
import { DateTime } from "luxon"

const Apod = ({ astronomyPic }) => {

    let todaysMedia
    if (astronomyPic.media_type === "video"){
        todaysMedia = <iframe title="nasa video" width="630" height="472" src={astronomyPic.url}></iframe>
    }
    else {
        todaysMedia = <img alt="nasa_apod" src={astronomyPic.hdurl} style={{maxWidth: "50%", width: 'auto', height: 'auto'}} ></img>
    }

    return(
        <div id="apod">
            <h1>Astronomy Picture of the Day</h1>
            <h2>{DateTime.fromISO(astronomyPic.date).toFormat('LLLL d, y')}</h2>
            
            <div id="astronomy_pic">
                <h3>{astronomyPic.title}</h3>
                {todaysMedia}
            </div>
            
            <p>{astronomyPic.explanation}</p> 
        </div>
    )
}

export default Apod