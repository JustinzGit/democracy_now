import React, { Component } from "react"

class Login extends Component {

    state = {
        email: "",
        password: ""
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
        .then(railsResp => {
            if (railsResp.status === 201){
                console.log("Login Response", railsResp)
                this.props.handleAuth(railsResp.user)
            }
        })
        .catch(error => {
            console.log("Login Error", error)
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return(
            <div>
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