import {fetchAllUsers } from '../../request/request'

//Get All Users
     export const getAllUsers = () => {
        return dispatch => {
            fetchAllUsers()
            .then (user =>dispatch (
                {type: 'GET_ALL_USERS_SUCCEED',payload: user}) 
            )
    
            .catch(err=>dispatch( {
                type: 'GET_ALL_USERS_FAILED',
                payload: err
              }))
        }
    
    }
    