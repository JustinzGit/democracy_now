import React from 'react'
import { connect } from 'react-redux'
import handleLogout from '../actions/handleLogout'

const Home = ({ handleLogout }) => {
    return(
        <div>
            <h1>Home Page</h1>
            <p><button onClick={handleLogout}>Log Out</button></p>
        </div>
    )
}

export default connect(null, { handleLogout })(Home)