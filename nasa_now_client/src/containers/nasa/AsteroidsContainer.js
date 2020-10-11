import React, { Component } from 'react'
import { connect } from 'react-redux'

import fetchAsteroids from '../../actions/nasa/fetchAsteroids'
import Asteroids from '../../components/nasa/Asteroids'
import NavBar from '../../components/NavBar'
import LogoutButton from '../../components/LogoutButton'
import Loading from '../../components/Loading'

class AsteroidsContainer extends Component {    
    componentDidMount(){
        this.props.fetchAsteroids()
    }

    render(){
        if(!this.props.requestingData){
            return(
                <div>
                    <NavBar currentPath={this.props.history.location.pathname}/>
                    <Asteroids asteroids={this.props.asteroids} />
                    <LogoutButton />
                </div>
            )
        }
        else{
            return(<div><Loading pageName={"Today's Asteroids"}/></div>)
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