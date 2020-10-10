import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

// import Error from './Error'
import handleLogin from '../../actions/auth/handleLogin'

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
            <div>
                {/* {this.state.error && <Error messages={this.state.error} /> } */}

                <form onSubmit={this.handleSubmit}>
                    <p>Email:
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.email}></input></p>

                    <p>Password:
                    <input type="text" onChange={this.handleChange} name="password" value={this.state.password}></input></p>

                    <input type="submit" value="Login"></input>

                    <p>Don't Have An Account?</p>
                    <button onClick={this.handleOnClick}>SignUp</button>
                </form>
            </div>
        )
    }
}

export default connect(state => ({ loggedInStatus: state.user.loggedInStatus }), { handleLogin })(Login)