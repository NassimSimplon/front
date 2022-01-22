import axios from "axios";
import {
    getAllUsersUrl,getAllServicesUrl,deleteServiceUrl,addServiceUrl,updateServiceUrl,getAllTémoignagesUrl,deleteTémoignageUrl
} from "./ApiUrls.js";

// getAllUsers

export const fetchAllUsers = () =>
  axios
    .get(getAllUsersUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

//                                         Services Requests
  // getAllServices
  
    export const fetchAllServices = () =>
  axios
    .get(getAllServicesUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


    //             deletService


export const fetchDeleteService = (id) =>
axios.delete(`${deleteServiceUrl}/${id}`).then((res) => res.data);


 //             addService
export const fetchAddService = (icon,title,description) =>
  axios
    .post(addServiceUrl, { icon,title,description})
    .then((res) => res.data);


     //            update Service

     export const updateService=(id,icon,title,description)=>{
      axios.put(`${updateServiceUrl}/${id}`,{id,icon,title,description
  }).then(res=>res.data) 
  }


//                                  Témoignages Requests

//Get All Témoignages 


export const fetchAllTémoignages = () =>
axios
  .get(getAllTémoignagesUrl, {
    Accept: "application/json",
    "Content-Type": "application/json",
  })
  .then((res) => res.data);

  


      //             deleteTémoignages


export const fetchDeleteTémoignages = (id) =>
axios.delete(`${deleteTémoignageUrl}/${id}`).then((res) => res.data);
