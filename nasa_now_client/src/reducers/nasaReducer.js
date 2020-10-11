export default function nasaReducer(
    state = {
        requestingData: false,
        astronomyPic: {
            date: "",
            title: "",
            hdurl: "",
            explanation: ""
        },
        asteroids: []
    },
    action){
    
    switch (action.type){
        case 'START_APOD_REQUEST':
            return {
                ...state,
                astronomyPic: {...state.astronomyPic},
                requestingData: true
            }
        
        case 'ACQUIRE_APOD':
            return {
                ...state,
                astronomyPic: action.astronomyPic,
                requestingData: false
            }

        case 'START_ASTEROIDS_REQUEST':
            return {
                ...state,
                asteroids: [...state.asteroids],
                requestingData: true
            }

        case 'ACQUIRE_ASTEROIDS':
            return {
                ...state,
                asteroids: action.currentAsteroids,
                requestingData: false
            }
        
        default:
            return state
    }

}