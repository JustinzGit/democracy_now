import React, { Component } from "react"
// import { Redirect } from "react-router-dom"

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
            if (apiData.status === 201){
                console.log("LOGIN PROPS", this.props)
                this.props.handleLogin(apiData.user)
                this.props.history.push('/')
            }
            else {
                console.log("Login Error", apiData.error)
            }
        })
        .catch(error => {
            console.log("Login Error", error)
        })
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