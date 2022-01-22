import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActualités } from "../redux/Actualités/actionActualités";
import Background from "../images/bg-img.jpeg";
import "../App.css";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Actualités = () => {
  //get All Actualités
  const actualités = useSelector((state) => state.actualitéStore.actualité);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActualités());
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
        <h1 className="testaa"> <span id="tests">A</span>ctualités</h1>
        <br/>
      </div>
      <div className="blog" id="blog">
        <div className="container">
          
          <div className="row">
            {Object.keys(actualités).map((el) => (
              <div className="col-lg-6" key={actualités[el]._id}>
                <div className="blog-item mt-4">
                  <div className="blog-img">
                    <img src={actualités[el].image} alt="Blog" />
                  </div>
                  <div className="blog-text">
                    <h2>{actualités[el].title}</h2>
                    <div className="blog-meta">
                      <p>
                        <i className="far fa-user"></i>Admin
                      </p>
                      <p>
                        <i className="far fa-calendar-alt"> </i>{actualités[el].date}
                      </p>
                      <p> </p>
                    </div>
                     <button className="btn mt-3">
                      Read More <i className="fa fa-angle-right"></i>
                    </button>
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
        <br/>
        <div className="text-center">
          <button className="btn">
            Read More <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default Actualités;
