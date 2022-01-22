import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllActualités,
  getActualité,
} from "../redux/Actualités/actionActualités";
import { Link } from "react-router-dom";
import "../App.css";
const Actualités = () => {
  //get All Actualités
  const actualités = useSelector((state) => state.actualitéStore.actualité);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActualités());
  }, []);

  const getItem = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <div>
      <div className="blog" id="blog">
        <div className="container">
          <div className="section-header text-center ">
            <p>Nos</p>
            <h2>Actualités</h2>
          </div>
          <div className="row">
            {Object.keys(actualités).map((el) => (
              <div className="col-lg-6" key={actualités[el]._id}>
                <div className="blog-item">
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
                        <i className="far fa-calendar-alt"></i>
                      </p>
                      <p>{actualités[el].date}</p>
                    </div>

                    <Link to={`/actualité/${actualités[el]._id}`}>
                      <button
                        onClick={() => getItem(actualités[el]._id)}
                        className="btn mt-3"
                      >
                        Read More <i className="fa fa-angle-right"></i>
                      </button>
                    </Link>
                  </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="btn">
            Read More <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actualités;
