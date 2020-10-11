import React, { Component } from 'react';
import { connect } from 'react-redux'
import handleLogout from '../actions/auth/handleLogout'
import { Button } from 'react-bootstrap'

class LogoutButton extends Component {
    render(){
        return(
            <div>
                <Button variant="dark" onClick={this.props.handleLogout}>Logout</Button>
            </div>
        )
    }
}

export default connect(null, { handleLogout })(LogoutButton)