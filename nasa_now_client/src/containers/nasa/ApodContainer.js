import React, { Component } from 'react'
import { connect } from 'react-redux'

import Apod from '../../components/nasa/Apod'
import fetchApod from '../../actions/nasa/fetchApod'

class ApodContainer extends Component {
    state = {
        dateInput: ""
    }

    componentDidMount(){
        this.props.fetchApod()
    }

    setDate = (userDate) => {
        this.setState({ dateInput: userDate })
    }

    handleSubmit = () => {
        this.props.fetchApod(this.state.dateInput)
    }

    render(){
        if(!this.props.requestingData){
            return(
                <div>
                    <Apod astronomyPic={this.props.astronomyPic} />
                    
                    <form onSubmit={this.handleSubmit}>
                        <p>Select a date to view NASA's astronomy picture on that date</p>
                        <input onChange={this.setDate} type="date"></input>
                        <p><input type="submit" value="Get Picture"></input></p>
                    </form>
                </div>
                )
        }
        else{
            return(<div><h1>Loading Astronomy Picture of the Day</h1></div>)
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        astronomyPic: state.nasa.astronomyPic,
        requestingData: state.nasa.requestingData
    }
}

export default connect(mapStateToProps, { fetchApod })(ApodContainer)