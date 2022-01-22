 import {getAllUsers} from '../redux/User/UserAction'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllServices} from '../redux/Services/ServicesAction'
import axios from 'axios'
import '../dash.css'
const Acceuil = () =>{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    
    console.log(user)
    const [service,setService]=useState([])
     const getIt = () =>
    axios
      .get('http://localhost:4000/Nass_X/Services/get', {
        Accept: "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => setService(res.data));


    const [parcour,setParcour]=useState([])
    const getPar = () =>
   axios
     .get('http://localhost:4000/Nass_X/NosParcours/get', {
       Accept: "application/json",
       "Content-Type": "application/json",
     })
     .then((res) => setParcour(res.data));
  
     const [temoignage,setTemoignage]=useState([])
     const getTem = () =>
    axios
      .get('http://localhost:4000/Nass_X/Temoignages/get', {
        Accept: "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => setTemoignage(res.data));
     
      const [réalisations,setRéalisations]=useState([])
      const getRea = () =>
     axios
       .get('http://localhost:4000/Nass_X/Realisations/get', {
         Accept: "application/json",
         "Content-Type": "application/json",
       })
       .then((res) => setRéalisations(res.data));
       const [actualités,setActualités]=useState([])
       const getactu = () =>
      axios
        .get('http://localhost:4000/Nass_X/Actualites/get', {
          Accept: "application/json",
          "Content-Type": "application/json",
        })
        .then((res) => setActualités(res.data));
      
       
    
     useEffect(() => {
      dispatch(getAllUsers()),
      getIt(),
      getPar(),
      getTem(),
      getRea(),
      getactu()
      console.log(...user)

    }, []);
    return(
        <div className="container">
      <div className="row">
      <br/><br/><br/>
      <h1 className="text-center mt-2 " id='dash-tit'>Welcome to Dashboard</h1>
      <br/>

          <div className="col-md-3"></div>
          <div className="col-md-9 mt-5" id='dallIt'>
            <div className="col-md-7">
          <div  className="row   d-flex justify-content-flex-start">
<div className=" all " >  <svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>  <h5 className="my-3 mx-3 total " id="gtgt">Users Total:    {user.length} </h5> 
 
  </div>
      <div className="  alls "  id="fes-1">  <svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>  <h5 className="my-3 mx-2 total " id="ser-sta">Services Total: {service.length} </h5> 
      </div>
      <div className="  alls " id="fes-1"  >  <svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg> <h5 className="my-3 mx-2 total " id="ser-sta">Parcours Total : {parcour.length} </h5> 
      </div>
      </div>
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-7">
          <div  className="row   d-flex justify-content-flex-start">
<div className=" all " > <svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> <h5 className="my-3 mx-2 total ">Témoignages Total:    {temoignage.length} </h5> 
      </div>
      <div className="  alls " id="fes-1"><svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
</svg>  <h5 className="my-3 mx-2 total " id="ser-sta">Réalisations Total : {réalisations.length} </h5> 
      </div>
      <div className="  alls " id="fes-1"> <svg  id='icon-stat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>  <h5 className="my-3 mx-2 total " id="ser-sta">Actualités  Total: {actualités.length} </h5> 
      </div>
      </div>
      </div>
 
 

   
        

         
          </div>
          </div> 
        </div>
    )
}
export default Acceuil