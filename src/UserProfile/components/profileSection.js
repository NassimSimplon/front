import React, { useEffect }from 'react'
import Background from "../../images/bg-img.jpeg";
import { useSelector } from 'react-redux';
import jwt from "jwt-decode";
import '../profile.css'
import Footer from '../../shared/Footer';

 const ProfileSection = () => {
 
  const result = localStorage.getItem('token')
  const token = jwt(result)
 
    return (
        <div>
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
      <br/><br/><br/><br/><br/><br/>  
        <h1 className="text-white mt-5" id='tit-profile'>Bienvenue  {token.nom} sur Nass<span className="spana">X</span></h1>
        <br/><br/><br/><br/><br/><br/>  
<br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/>  

<hr/>
<Footer />
</div>  

            </div>
    )
}

export default   ProfileSection
