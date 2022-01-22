import {GET_ALL_RÉALISATIONS_SUCCEED, GET_ALL_RÉALISATIONS_FAILED }from './actionTypes'
import {fetchAllRéalisations } from '../../Request/request'

//Get All  Réalisations
     export const getAllRéalisations = () => {
        return dispatch => {
            fetchAllRéalisations()
            .then (réalisation =>dispatch (
                {type: GET_ALL_RÉALISATIONS_SUCCEED,payload: réalisation}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_RÉALISATIONS_FAILED,
                payload: err
              }))
        }
    
    }