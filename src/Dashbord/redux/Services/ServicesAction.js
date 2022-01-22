import {fetchAllServices ,fetchDeleteService,fetchAddService,updateService} from '../../request/request'
import axios from "axios";

//Get All Services
     export const getAllServices = () => {
        return dispatch => {
            fetchAllServices()
            .then (service =>dispatch (
                {type: 'GET_ALL_SERVICES_SUCCEED',payload: service}) 
            )
    
            .catch(err=>dispatch( {
                type: 'GET_ALL_SERVICES_FAILED',
                payload: err
              }))
        }
     }


//Delete Service

     export const deleteService=(id)=> async (dispatch) =>{
        try{
         await fetchDeleteService(id);
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
    

    //Add Service

    export const addService=(icon,title,description)=> async (dispatch) =>{
        try{
            const res = await fetchAddService(icon,title,description);
            dispatch ({
                type:"ADD_SERVICE_SUCCED",
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }

//Update  Service

    

  
 

      export const serviceUpdate = (_id,icon,title,description) => async (dispatch) => {
        try {
          const res = await axios.put(`http://localhost:4000/Nass_X/Service/update/${_id}`
          ,{icon,title,description}) 
      
          dispatch({
            type: "UPDATE_SERVICE_SUCCED", 
            payload: res.data
          });
          console.log("superrr")
        } catch (error) {
          console.log(error);
        }
      };
      
      
    