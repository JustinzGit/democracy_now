import React, { Component } from "react"
import Error from './Error'

class Signup extends Component {

    state = {
        email: "",
        password: "",
        password_confirmation: "",
        street_address: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3001/users", {
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
            if (apiData.status === 500 ){
              this.setState({ ...this.state, error: apiData.error })
              this.props.history.push("/signup")
            } 
            else if (apiData.status === 201 ) {
              this.props.handleSignup(this.state)
              this.props.history.push("/")
            }
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleOnClick = () => {
        this.props.history.push('/login')
    }

    render(){
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

                    <p>Street Address:
                    <input type="text" onChange={this.handleChange} name="street_address" value={this.state.street_address}></input></p>

                    <p>City:
                    <input type="text" onChange={this.handleChange} name="city" value={this.state.city}></input></p>

                    <p>State:
                    <input type="text" onChange={this.handleChange} name="state" value={this.state.state}></input></p>

                    <p>Zipcode:
                    <input type="text" onChange={this.handleChange} name="zipcode" value={this.state.zipcode}></input></p>

                    <p>Country:
                    <input type="text" onChange={this.handleChange} name="country" value={this.state.country}></input></p>

                    <input type="submit" value="SignUp"></input>

                    <p>Already Have An Account?</p>
                    <button onClick={this.handleOnClick}>Login</button>
                </form>
            </div>
        )
    }
}

export default Signup