import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartenaires } from "../redux/NosPartenaires/actionPartenaires";
import '../App.css'
import Background from "../images/bg-img.jpeg";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";



const Partenaires = () => {
    //get All partenaires
  const partenaires = useSelector((state) => state.partenaireStore.partenaires);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPartenaires());
  }, []);
    return (
        <div>
            <Navbar />
             <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
           <br/><br/>
        <h1 className="testaa"> <span id="tests">P</span>artenaires</h1>
        <br/>
      </div>
       
          
     
             <div className="partenaires" id="partenaires">
            <div className="container">
            
                <div className="row">
               
                   
                    <div className="col-lg-12  mt-5" >
                    {partenaires.map((el) => (
                        <div className="partenaires-item" key={el._id}>
                            <div className="partenaires-img">
                            <img src={el.image} id="partenaires-img" />
                            </div>
                            <div className="partenaires-text">
                                <h2 id="partenaire-name">{el.name}</h2>
                              
                                <p>
                                {el.description}    </p> 
                                <div className="partenaires-social">
                                    <a className="btn" href={el.twitter}><i className="fab fa-twitter mt-1.5"></i> </a>
                                    <a className="btn" href={el.facebook}><i className="fab fa-facebook-f mt-1.5"></i></a>
                                    <a className="btn" href={el.linkedin}><i className="fab fa-linkedin-in mt-1.5"></i></a>
                                    <a className="btn" href={el.instagram}><i className="fab fa-instagram mt-1.5"></i></a>
                                </div>
                            </div>
                        </div> ))}                            <br/><br/><br/>

                    </div>
                </div><br/>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Partenaires
