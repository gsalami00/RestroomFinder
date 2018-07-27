import {addNewUser} from './actionCreator'
import axios from 'axios'

export const addUser = (user) =>{
    return async function (dispatch) {
       console.log(user)
    }
}