import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../redux/services/actionsService";
import '../App.css'
import Background from "../images/bg-img.jpeg";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Service = () => {
     //get All Service
  const service = useSelector((state) => state.serviceStore.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <div>
      <Navbar />
           <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      ><br/><br/>
        <h1 className="testaa"> <span id="tests">N</span>os Services</h1>
        <br/>
        </div> 
    
      <div className="service" id="service">
        <div className="container" id="sevice-page-container">
        
          <div className="row " id='service-row'>
            {service.map((el) => (
              <div className="col-md-12   " key={el._id}>
                <div className="service-item">
                  <div className="service-icon" id="service-page-icon">
                    <i className={el.icon}></i>
                  </div>
                  <div className="service-text">
                    <h3> {el.title}</h3>
                    <p>{el.description}  </p>
                  </div>
                </div><br/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service
