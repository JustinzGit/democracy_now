export default function fetchAsteroids(){
    return (dispatch) => {
        dispatch({ type: 'START_ASTEROIDS_REQUEST'})
        fetch(`https://nasa-now-backend.herokuapp.com/nasa/asteroids/`)
        .then(response => response.json())
        .then(apiData => {
            if (apiData.status === 200){

                let dateArray = Object.keys(apiData.near_earth_objects).sort()
                let currentAsteroids = apiData.near_earth_objects[dateArray[0]]
                
                return dispatch({ type: 'ACQUIRE_ASTEROIDS', currentAsteroids })
            }

        })
    }
}