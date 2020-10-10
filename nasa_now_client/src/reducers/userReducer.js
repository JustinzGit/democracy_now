export default function userReducer(
    state = {
        requestingData: false,
        loggedInStatus: false, 
        user: {}
    }, 
    action){

    switch (action.type){
      
        case 'START_LOGIN_REQUEST':
            return {
                ...state, 
                user: {...state.user}, 
                requestingData: true
            }

        case 'LOGIN':
            return {
                ...state, 
                user: action.user, 
                requestingData: false,
                loggedInStatus: true
            }

        case 'START_LOGOUT_REQUEST':
            return {
                ...state, 
                user: {...state.user}, 
                requestingData: true
            }

        case 'LOGOUT':
            return {
                ...state,
                user: {},
                requestingData: false,
                loggedInStatus: false
            }

        case 'START_SIGNUP_REQUEST':
            return {
                ...state,
                user: {...state.user},
                requestingData: true
            }
            
        case 'SIGNUP':
            return {
                ...state,
                user: action.user,
                requestingData: false,
                loggedInStatus: true
            }

        case 'ACQUIRING_CURRENT_LOGIN':
            return {
                ...state,
                user: {...state.user},
                requestingData: true
            }

        case 'CURRENT_LOGIN':
            return {
                ...state,
                user: action.user,
                requestingData: false,
                loggedInStatus: action.loggedInStatus
            }

        default:
            return state
    }
}