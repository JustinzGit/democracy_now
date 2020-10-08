import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ loggedInStatus, component: Component, ...rest }) => {
    return(
        <Route render={(props) => (
            loggedInStatus ? <Component loggedInStatus={loggedInStatus} {...props} {...rest}  /> : <Redirect to='/login' />
        )}/>
    )
}

export default PrivateRoute