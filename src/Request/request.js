import axios from "axios";
import {
  getAllServicesUrl,
  getAllRéalisationsUrl,
  getAllNosParcoursDesFormationsUrl
  ,getAllPartenairesUrl,
  getAllTémoignagesUrl,
  getAllActualitésUrl,
  addContactUrl,getActualitésUrl,
  addTémoignageUrl
} from "./ApiUrls";

//                                       service requests

// getAllServices

export const fetchAllServices = () =>
  axios
    .get(getAllServicesUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


    //                                Nos réalisations requests

// getAllServices

export const fetchAllRéalisations = () =>
  axios
    .get(getAllRéalisationsUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


  //                                  Nos parcours des formations requests
  
 //getAllNosParcoursDesFormations 

 export const fetchAllParcours = () =>
  axios
    .get(getAllNosParcoursDesFormationsUrl, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);


 //                                  Nos Partenaires requests
  
 //getAllPartenaires 

 export const fetchAllPartenaires = () =>
 axios
   .get(getAllPartenairesUrl, {
     Accept: "application/json",
     "Content-Type": "application/json",
   })
   .then((res) => res.data);
   
   
   //                                  Témoignage requests
  
 //getAllTémoignages 

 export const fetchAllTémoignages = () =>
 axios
   .get(getAllTémoignagesUrl, {
     Accept: "application/json",
     "Content-Type": "application/json",
   })
   .then((res) => res.data);

    //Add Témoignages 


    
   export const fetchAddTémoignages = (userNom, userPrenom, userImage, comment) =>{
    axios
      .post(addTémoignageUrl, { userNom, userPrenom, userImage, comment })
      .then((res) => res.data);}


   //                                  Actualités requests
  
 //getAllActualités

 export const fetchAllActualités = () =>
 axios
   .get(getAllActualitésUrl, {
     Accept: "application/json",
     "Content-Type": "application/json",
   })
   .then((res) => res.data);

   //Get Actualité
   
   export const fetchGetActualité = (id) =>
   axios
     .get(`http://localhost:8000/Nass_X//Actualite/get/${id}`, {
       Accept: "application/json",
       "Content-Type": "application/json",
     })
    
      //                                  Contacts requests
  
 //addContact
 
   export const fetchAddContact = (name, email, subject, message) =>{
  axios
    .post(addContactUrl, { name, email, subject, message })
    .then((res) => res.data);}

 
  