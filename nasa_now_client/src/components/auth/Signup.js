import React, { Component } from "react"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import AuthErrors from './AuthErrors'
import handleSignup from '../../actions/auth/handleSignup'
import { Form, Button } from 'react-bootstrap'
import NasaLogo from '../NasaLogo'

class Signup extends Component {

    state = {
        email: "",
        password: "",
        password_confirmation: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSignup(this.state)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleOnClick = () => {
        this.props.history.push('/login')
    }

    render(){

        if (this.props.loggedInStatus){
            return <Redirect to={'/'} />
        }

        return(
            <div id="signup">
                <NasaLogo />
                <div class="form">
                {this.props.authErrors.length !== 0 && <AuthErrors messages={this.props.authErrors} /> }
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="email" value={this.state.email}/>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.handleChange} name="password" value={this.state.password}/>

                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control  type="password" onChange={this.handleChange} name="password_confirmation" value={this.state.password_confirmation}/>

                    <Button id="signup_btn" variant="primary" type="submit">Sign Up</Button>

                    <p>Already Have An Account?</p>
                    <Button onClick={this.handleOnClick}>Login</Button>
                </ Form>
            </div>
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

export default connect( mapStateToProps , { handleSignup })(Signup)