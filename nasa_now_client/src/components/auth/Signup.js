import React, { Component } from "react"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

// import Error from './Error'
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
        this.props.handleSignup()
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
            <div class="form">
                {/* {this.state.error && <Error messages={this.state.error} /> } */}
                <NasaLogo />
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
        )
    }
}

export default connect(state => ({ loggedInStatus: state.user.loggedInStatus }), { handleSignup })(Signup)