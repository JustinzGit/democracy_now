import React, { Component } from 'react'
import { DateTime } from "luxon"

import AsteroidCard from './AsteroidCard'

class Asteroids extends Component {
    constructor(){
        super()

        this.state = {
            loadingComplete: false,
            dateArray: "",
            selectedDate: "",
            asteroid_count: "",
            near_earth_objects: ""
        }
    }

    fetchAsteroids = () => {
        fetch(`http://localhost:3001/nasa/asteroids/`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200 ){

                let dateArray = Object.keys(apiData.near_earth_objects).sort()

                this.setState({
                    loadingComplete: true,
                    dateArray: dateArray,
                    selectedDate: dateArray[0],
                    asteroid_count: apiData.asteroid_count,
                    near_earth_objects: apiData.near_earth_objects
                }, () => console.log(this.state))

                
            }
        })
    }

    componentDidMount(){
        this.fetchAsteroids()
    }

    handleOnChange = (event) => {
        this.setState({ selectedDate: event.target.value })
    }

    render(){
        if(this.state.loadingComplete){
            return(
                <div>
                    <h1>Asteroids - (Near Earth Object Web Service)</h1>
                    <p>There are a total of {this.state.asteroid_count} asteroids approaching Earth this week</p>
                    <p>There are a total of {this.state.near_earth_objects[this.state.selectedDate].length} asteroids approaching Earth on {DateTime.local(this.selectedDate).toFormat('LLLL d, y')}</p>
                    {this.state.near_earth_objects[this.state.selectedDate].map(data => <AsteroidCard asteroidData={data} />)}

                    <select onChange={this.handleOnChange} id="date">
                        {this.state.dateArray.map(date => <option key={date} value={date}>{DateTime.fromISO(date).toFormat('LLLL d, y')}</option>)}
                    </select>
                    
                </div>
            )
        }
        else {
            return(<div><h1>Loading Asteroids</h1></div>)
        }
    }

}

export default Asteroids