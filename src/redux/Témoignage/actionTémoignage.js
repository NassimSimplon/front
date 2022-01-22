import {GET_ALL_TÉMOIGNAGES_SUCCEED ,GET_ALL_TÉMOIGNAGES_FAILED}from './actionType'
import {fetchAllTémoignages,fetchAddTémoignages } from '../../Request/request'
import {fetchDeleteTémoignages} from'../../Dashbord/request/request'

//Get All Témoignages
     export function getAllTémoignages() {
        return dispatch => {
            fetchAllTémoignages()
            .then (Témoignage =>dispatch (
                {type: GET_ALL_TÉMOIGNAGES_SUCCEED,payload: Témoignage}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_TÉMOIGNAGES_FAILED,
                payload: err
              }))
        }
    
    }


     //delete Témoignage
     
 export const deleteTémoignage=(id)=> async (dispatch) =>{
    try{
     await fetchDeleteTémoignages(id);
        dispatch ({
            type:"DELETE_SERVICES_SUCCED",
            payload:id
        })
        console.log("payload")
      }
    catch (error) {
              console.log(error);
             }
}


export const addTémoignage=(userNom, userPrenom, userImage, comment)=> async (dispatch) =>{
    try{
        const res=await fetchAddTémoignages (userNom, userPrenom, userImage, comment)
        dispatch ({
            type:"ADD_CONTACT_SUCCEED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}