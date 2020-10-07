import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import Error from './Error'

class Login extends Component {

    state = {
        email: "",
        password: "",
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3001/sessions", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 401){
                this.setState({ ...this.state, error: apiData.error })
                this.props.history.push("/login")
            }
            else {
                this.props.handleLogin(this.state)
                this.props.history.push("/")
            }
        })
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
                {this.state.error && <Error messages={this.state.error} /> }

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

export default Login