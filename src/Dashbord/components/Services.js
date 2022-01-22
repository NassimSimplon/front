import DashSideBar from "./DashSideBar";
import Background from "../../images/bg-img.jpeg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllServices,
  deleteService,
} from "../redux/Services/ServicesAction";
import "../../App.css";
import "../dash.css";
import AddService from "../Post Components/AddService";
import UpdateSer from "../updateComponents/updateService";
const Services = () => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceReducer.service);
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  const deleteItem = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <div className="container" id="service-page-dash">
 
      <div className="row">
        <div className="col-md-2">
          <DashSideBar />
        </div>
        <div className="col-md-10 ">
          <div id="service-title-add">
            <h1 id="title-service-dash">Services</h1>
            <AddService id="modal" />
           </div>
          <div className="service" id="service">
            <div className="container">
              <div className="section-header   " data-wow-delay="0.1s">
                {service.map((el) => (
                  <div className="col-lg-10   " key={el._id}>
                    <br/>
                    <div className="service-item">
                      <div id="service-icon" className="service-icon">
                        <i className={el.icon}></i>
                      </div>
                      <div className="service-text">
                        <h3 id="content-title"> {el.title}</h3>
                        <p id="content">
                          {el.description.slice(0, 95)}...
                        </p>
                      </div>
                      <svg
                        id="delete"
                        onClick={() => deleteItem(el._id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg><br/>
                    </div><UpdateSer  el={el} _id={el._id} className="ser-dar" />
                    <hr />

                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
