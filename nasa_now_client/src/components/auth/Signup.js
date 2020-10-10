import React, { Component } from "react"
import { connect } from 'react-redux'
import handleSignup from '../../actions/handleSignup'
import Error from './Error'

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
            <div>
                {this.state.error && <Error messages={this.state.error} /> }

                <form onSubmit={this.handleSubmit}>
                    <p>Email:
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.email}></input></p>

                    <p>Password:
                    <input type="text" onChange={this.handleChange} name="password" value={this.state.password}></input></p>

                    <p>Password Confirmation:
                    <input type="text" onChange={this.handleChange} name="password_confirmation" value={this.state.password_confirmation}></input></p>

                    <input type="submit" value="SignUp"></input>

                    <p>Already Have An Account?</p>
                    <button onClick={this.handleOnClick}>Login</button>
                </form>
            </div>
        )
    }
}

export default connect(state => ({ loggedInStatus: state.loggedInStatus }), { handleSignup })(Signup)