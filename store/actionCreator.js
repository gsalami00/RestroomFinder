import {ADD_NEW_USER} from './actionsType'

export const addNewUser = newUser => {
    return {
        type: ADD_NEW_USER,
        payload: newUser
    };
}