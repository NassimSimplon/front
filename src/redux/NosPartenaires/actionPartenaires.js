import {GET_ALL_PARTENAIRES_SUCCEED, GET_ALL_PARTENAIRES_FAILED }from './actionType'
import {fetchAllPartenaires } from '../../Request/request'

//Get All Partenaires
     export const getAllPartenaires = () => {
        return dispatch => {
            fetchAllPartenaires()
            .then (partenaire =>dispatch (
                {type: GET_ALL_PARTENAIRES_SUCCEED,payload: partenaire}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_PARTENAIRES_FAILED,
                payload: err
              }))
        }
    
    }