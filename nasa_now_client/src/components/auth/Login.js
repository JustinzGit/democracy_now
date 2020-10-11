import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

// import Error from './Error'
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
            <div class="form">
                {/* {this.state.error && <Error messages={this.state.error} /> } */}
                <NasaLogo />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="email" value={this.state.email}/>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="password" value={this.state.password}/>

                    <Button id="login_btn" variant="primary" type="submit">Login</Button>

                    <p>Don't Have An Account?</p>
           
                    <Button variant="primary" onClick={this.handleOnClick}>SignUp</Button>
                </ Form>
            </div>
        )
    }
}

export default connect(state => ({ loggedInStatus: state.user.loggedInStatus }), { handleLogin })(Login)