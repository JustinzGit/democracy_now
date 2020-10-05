import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ loggedInStatus, component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            loggedInStatus ? <Component {...props} /> : <Redirect to='/login' />
        )}/>
    )
}

export default PrivateRoute