import React from 'react'



const Home = ({ handleLogout }) => {
    
    return(
        <div>
            <h1>Home Page</h1>
            <p><button onClick={handleLogout}>Log Out</button></p>
        </div>
    )
}

export default Home