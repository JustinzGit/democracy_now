import React, { Component } from 'react'
import { connect } from 'react-redux'

import fetchAsteroids from '../../actions/nasa/fetchAsteroids'
import Asteroids from '../../components/nasa/Asteroids'

class AsteroidsContainer extends Component {    
    componentDidMount(){
        this.props.fetchAsteroids()
    }

    render(){
        if(!this.props.requestingData){
            return(
                <div>
                    <Asteroids asteroids={this.props.asteroids} />
                </div>
            )
        }
        else{
            return(<div><h1>Loading Asteroid Data</h1></div>)
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        requestingData: state.nasa.requestingData,
        asteroids: state.nasa.asteroids
    }
}

export default connect(mapStateToProps, { fetchAsteroids })(AsteroidsContainer)