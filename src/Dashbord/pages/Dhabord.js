import React from 'react'
import Dash from '../components/DashSideBar'
import Acceuil from '../components/Statistiques'
import Background from "../../images/bg-img.jpeg";

const Dhabord = () => {
    return (
        <div>
       
    
        <div className="row">
          
           <div className="col-md-1"> <Dash /></div>
          <div className="col-md-8">   < Acceuil /></div>

         

          </div> 
        </div>
    )
}

export default Dhabord
