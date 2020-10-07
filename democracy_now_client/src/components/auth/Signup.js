import React, { Component } from "react"

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
              this.setState({ ...this.state, error: "ERROR IN SIGNUP" })
              this.props.history.push("/signup")
            } 
            else {
              this.props.handleSignup(this.state)
            }
        })
        .catch(error => {
            console.log("Signup Error", error)
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        let error
        
        if (this.state.error){
            error = this.state.error
        }

        return(
            <div>
                <p>{error}</p>
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
                </form>
            </div>
        )
    }
}

export default Signup