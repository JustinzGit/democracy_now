import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ loggedInStatus, component: Component, ...rest }) => {
    return(
        <Route render={(props) => (
            loggedInStatus ? <Component {...props} {...rest}  /> : <Redirect to='/login' />
        )}/>
    )
}

export default connect(state => ({ loggedInStatus: state.user.loggedInStatus }))(PrivateRoute)