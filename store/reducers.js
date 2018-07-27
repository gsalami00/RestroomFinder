import {combineReducers} from 'redux'

// add new user
import {ADD_NEW_USER} from './actionsType'

const newUserReducer = (state = {}, action)=>{
switch(action.type){
    case ADD_NEW_USER: 
        return action.payload
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    newUser : newUserReducer
})

export default rootReducer