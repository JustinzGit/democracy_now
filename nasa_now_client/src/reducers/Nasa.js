export default function Nasa(
    state = {
        requestingData: false,
        astronomy_pic: {},
        asteroids: {}
    },
    action){
    
    switch (action.type){
        case 'START_APOD_REQUEST':
            return {
                ...state,
                astronomy_pic: {...state.astronomy_pic},
                requestingData: true
            }
        
        case 'ACQUIRE_APOD':
            return {
                ...state,
                astronomy_pic: action.apod,
                requestingData: false
            }
        
        default:
            return state
    }

}