import {GET_ALL_SERVICES_SUCCEED ,GET_ALL_SERVICES_FAILED}from './actionsType'
import {fetchAllServices } from '../../Request/request'

//Get All Services
     export function getAllServices() {
        return dispatch => {
            fetchAllServices()
            .then (service =>dispatch (
                {type: GET_ALL_SERVICES_SUCCEED,payload: service}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_SERVICES_FAILED,
                payload: err
              }))
        }
    
    }