import React from 'react'
import '../dash.css'
import {Link} from 'react-router-dom'
const Dash = () => {
    return (
        <div>
     
             <div className="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" className="btn btn-sm btn-dark" >
    <i className="fas fa-bars"></i>
  </a>
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a >Dashboard </a>
        <div id="close-sidebar">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="sidebar-header">
        
        <div className="user-info">
          <span className="user-name">Nassim
            <strong>Khlifi</strong>
          </span>
          <span className="user-role">Administrator</span>
          <span className="user-status">
            <i className="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
      
       <div className="sidebar-menu">
        <ul>
         <Link to="/dashbord">
          <li className="sidebar-dropdown">
            <a >
            <i className="fa fa-chart-line"></i>
              <span>Dashbord</span>
             </a>
            
          </li></Link>
          <Link to="/Services">

          <li className="sidebar-dropdown">
            <a >
              <i className="fa fa-shopping-cart"></i>
              <span>Services</span>
             </a>
        
          </li></Link>
          <Link to="/Témoignage">

          <li className="sidebar-dropdown">
            <a >
              <i className="far fa-gem"></i>
              <span>Témoignage</span>
            </a>
            
          </li></Link>
          <Link to="/Parcours">

          <li className="sidebar-dropdown">
            <a >
            <i className="fa fa-tachometer-alt"></i>
              <span>Parcours</span>
            </a>
           
          </li></Link>
          <Link to="/Partenaires">

          <li className="sidebar-dropdown">
            <a >
              <i className="fa fa-globe"></i>
              <span>Partenaires</span>
            </a>
            
          </li></Link>
          <Link to="/Actualités">

          <li>
            <a >
              <i className="fa fa-book"></i>
              <span>Actualités</span>
             </a>
          </li></Link>
          
       
        </ul>
      </div>
     </div>
   
  </nav>
   
 </div>
        </div>
    )
}

export default Dash
