import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

import AuthErrors from './AuthErrors'
import NasaLogo from '../NasaLogo'
import handleLogin from '../../actions/auth/handleLogin'
import { Form, Button } from 'react-bootstrap'

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = () => {
        this.props.handleLogin(this.state)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnClick = () => {
        this.props.history.push("/signup")
    }

    render(){

        if (this.props.loggedInStatus){
            return <Redirect to={'/'} />
        }

        return(
            <div className="form">
                <NasaLogo />
                {this.props.authErrors.length !== 0 && <AuthErrors messages={this.props.authErrors} /> }
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="email" value={this.state.email}/>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.handleChange} name="password" value={this.state.password}/>

                    <Button id="login_btn" variant="primary" type="submit">Login</Button>

                    <p>Don't Have An Account?</p>
           
                    <Button variant="primary" onClick={this.handleOnClick}>SignUp</Button>
                </ Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.user.loggedInStatus,
        authErrors: state.user.authErrors
    }
}

export default connect( mapStateToProps , { handleLogin })(Login)