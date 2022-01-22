
import {fetchAllTémoignages ,fetchDeleteTémoignages} from '../../request/request'
//Get All Services
export const getAllTémoignages = () => {
    return dispatch => {
        fetchAllTémoignages()
        .then (service =>dispatch (
            {type: 'GET_ALL_SERVICES_SUCCEED',payload: service}) 
        )

        .catch(err=>dispatch( {
            type: 'GET_ALL_SERVICES_FAILED',
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
        dispatch(getAllServices)
     }
    catch (error) {
              console.log(error);
             }
}



// 