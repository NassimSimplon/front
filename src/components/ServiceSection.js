import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../redux/services/actionsService";

const ServiceSection = () => {
    //get All Service
  const service = useSelector((state) => state.serviceStore.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <div>
      <div className="service" id="service">
        <div className="container">
          <div className="section-header text-center  " data-wow-delay="0.1s">
            <p>Quels sont</p>
            <h2>Nos services</h2>
          </div>
          <div className="row ">
            {service.map((el) => (
              <div className="col-lg-6   " key={el._id}>
                <div className="service-item">
                  <div className="service-icon">
                    <i className={el.icon}></i>
                  </div>
                  <div className="service-text">
                    <h3> {el.title}</h3>
                    <p>{el.description.slice(1, 95)}...</p>
                  </div>
                </div><br/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
