import React, { Component } from 'react'
import { connect } from 'react-redux'

import Apod from '../../components/nasa/Apod'
import fetchApod from '../../actions/nasa/fetchApod'
import NavBar from '../../components/NavBar'
import LogoutButton from '../../components/LogoutButton'
import { Button } from 'react-bootstrap'

class ApodContainer extends Component {
    state = {
        dateInput: ""
    }

    componentDidMount(){
        this.props.fetchApod()
    }

    setDate = (event) => {
        this.setState({ dateInput: event.target.value })
    }

    handleSubmit = () => {
        this.props.fetchApod(this.state.dateInput)
    }

    render(){
        if(!this.props.requestingData){
            return(
                <div>
                    <NavBar currentPath={this.props.history.location.pathname}/>
                    <Apod astronomyPic={this.props.astronomyPic} />
                    
                    <form onSubmit={this.handleSubmit}>
                        <p><b>View NASA's astronomy picture on a selected date</b></p>
                        <input onChange={this.setDate} type="date"></input>
                        <p><Button id="get_pic_btn" variant="primary" type="submit">Get Picture</ Button></p>
                    </form>

                    <LogoutButton />
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