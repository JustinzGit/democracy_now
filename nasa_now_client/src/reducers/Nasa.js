export default function Nasa(
    state = {
        requestingData: false,
        astronomyPic: {},
        asteroids: {}
    },
    action){
    
    switch (action.type){
        case 'START_APOD_REQUEST':
            return {
                ...state,
                astronomyPic: {...state.astronomy_pic},
                requestingData: true
            }
        
        case 'ACQUIRE_APOD':
            return {
                ...state,
                astronomyPic: action.apod,
                requestingData: false
            }
        
        default:
            return state
    }

}