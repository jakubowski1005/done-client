import { combineReducers } from 'redux'
import userReducer from './userReducer'
import listReducer from './listReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    userReducer
    // listReducer,
    // todoReducer
})

export default rootReducer
