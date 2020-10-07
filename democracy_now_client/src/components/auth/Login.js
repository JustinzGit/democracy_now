import React, { Component } from "react"
// import { Redirect } from "react-router-dom"

class Login extends Component {

    state = {
        email: "",
        password: "",
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleLogin(this.state)
        this.props.history.push("/")
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        console.log("LOGIN = LOGIN WAS HIT")
        console.log("LOGIN = LOGGED IN STATUS", this.props.loggedInStatus)
        return(
            <div>
                <h3>{this.props.loggedInStatus ? "Logged In" : "Not Logged In"}</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Email:
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.email}></input></p>

                    <p>Password:
                    <input type="text" onChange={this.handleChange} name="password" value={this.state.password}></input></p>

                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    }
}

export default Login