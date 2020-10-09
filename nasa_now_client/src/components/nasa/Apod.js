import React, { Component } from 'react'
import { DateTime } from "luxon"

class Apod extends Component {
    constructor(){
        super()

        this.state = {
            loadingComplete: false,
            dateInput: "",
            date: "",
            title: "",
            copyright: "",
            hdurl: "",
            explanation: ""
        }
    }

    fetchApod = () => {
        fetch(`http://localhost:3001/nasa/apod/${this.state.dateInput}`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200 ){
                this.setState({
                    loadingComplete: true,
                    date: apiData.date,
                    title: apiData.title,
                    hdurl: apiData.hdurl,
                    explanation: apiData.explanation 
                })
            }
        })
    }

    componentDidMount(){
        this.fetchApod()
    }

    handleOnChange = (event) => {
        this.setState({ dateInput: event.target.value }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchApod()
    }

    render(){
        if(this.state.loadingComplete){
            return(
                <div>
                    <h1>Astronomy Picture of the Day</h1>
                    <h2>{DateTime.fromISO(this.state.date).toFormat('LLLL d, y')}</h2>
                    <h2>{this.state.title}</h2>
                    <img alt="nasa_apod" src={this.state.hdurl} style={{maxWidth: "100%", width: 1000, height: 'auto'}} ></img>
                    <p>{this.state.explanation}</p>

                    <form onSubmit={this.handleSubmit}>
                        <p>Select a date to view NASA's astronomy picture on that date</p>
                        <input onChange={this.handleOnChange} type="date"></input>
                        <p><input type="submit" value="Get Picture"></input></p>
                    </form>
                    
                </div>
            )
        }
        else {
            return(<div><h1>Loading Astronomy Picture of the Day</h1></div>)
        }
    }

}

export default Apod