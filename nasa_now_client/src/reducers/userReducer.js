export default function userReducer(
    state = {
        requestingData: false,
        loggedInStatus: false,
        authErrors: [], 
        user: {}
    }, 
    action){

    switch (action.type){
      
        case 'START_LOGIN_REQUEST':
            return {
                ...state, 
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
                requestingData: true
            }
            
        case 'SIGNUP':
            return {
                ...state,
                user: action.user,
                requestingData: false,
                loggedInStatus: true,
                authErrors: []
            }

        case 'ACQUIRING_CURRENT_LOGIN':
            return {
                ...state,
                requestingData: true
            }

        case 'CURRENT_LOGIN':
            return {
                ...state,
                user: action.user,
                requestingData: false,
                loggedInStatus: action.loggedInStatus
            }

        case 'POPULATE_AUTH_ERRORS':
            return {
                ...state,
                requestingData: false,
                authErrors: action.errors
            }

        default:
            return state
    }
}