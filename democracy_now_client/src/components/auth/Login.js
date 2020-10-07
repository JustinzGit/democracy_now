import React, { Component } from "react"
import { Redirect } from "react-router-dom"

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

    handleOnClick = () => {
        this.props.history.push("/signup")
    }

    render(){
        console.log("LOGIN = LOGIN WAS HIT")
        console.log("LOGIN = LOGGED IN STATUS", this.props.loggedInStatus)

        if (this.props.loggedInStatus){
            return <Redirect to={'/'} />
        }

        return(
            <div>
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