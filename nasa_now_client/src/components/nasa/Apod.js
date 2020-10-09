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

    fetchApod = () =>{
        fetch(`http://localhost:3001/nasa/apod${this.state.dateInput}`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200 ){
                this.setState({
                    loadingComplete: true,
                    date: apiData.date,
                    title: apiData.title,
                    copyright: apiData.copyright,
                    hdurl: apiData.hdurl,
                    explanation: apiData.explanation 
                })
            }
        })
    }

    componentDidMount(){
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
                    <h3>Copyright: {this.state.copyright}</h3>
                </div>
            )
        }
        else {
            return(<div><h1>Loading Astronomy Picture of the Day</h1></div>)
        }
    }

}

export default Apod