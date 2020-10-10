import { combineReducers } from 'redux'
import userReducer from './userReducer'
import nasaReducer from './nasaReducer'

export default combineReducers({ nasa: nasaReducer, user: userReducer })