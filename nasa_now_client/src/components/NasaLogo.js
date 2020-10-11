import React from 'react'
import Logo from '../nasa-logo.png'

const NasaLogo = () => {
    return(
        <div>
            <img src={Logo} alt="nasa_logo" style={{maxWidth: "100%", width: 800, height: 'auto'}}></img>
            <h1>NASA NOW</h1>
        </div>
    )
}

export default NasaLogo