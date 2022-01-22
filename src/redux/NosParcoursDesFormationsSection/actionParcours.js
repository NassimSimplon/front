import {GET_ALL_PARCOURS_SUCCEED, GET_ALL_PARCOURS_FAILED }from './actionType'
import {fetchAllParcours } from '../../Request/request'

//Get All  Parcours
     export const getAllParcours = () => {
        return dispatch => {
            fetchAllParcours()
            .then (réalisation =>dispatch (
                {type: GET_ALL_PARCOURS_SUCCEED,payload: réalisation}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_PARCOURS_FAILED,
                payload: err
              }))
        }
    
    }