import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllParcours } from "../redux/NosParcoursDesFormationsSection/actionParcours";
const NosParcour = () => {
  //get All parcours
  const parcours = useSelector((state) => state.parcourStore.parcours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllParcours());
  }, []);

   return (
    <div>
      <div className="parcour mt-2" id="parcour">
        <div className="container">
          <header
            className="section-header text-center "
            
          >
            <p>Nos</p>
            <h2>Parcours des Formations</h2>
          </header>
          <div className="timeline">
            {parcours.map((el) => (
              <div key={el._id}
                id="timeline-item"
                className={el.position}
                data-wow-delay="0.1s"
              >
                <div className="timeline-text">
                  <div className="timeline-date">l'étape {el.step}</div>
                  <h2 className="parcour-title">{el.title}</h2>
                  <p className="mt-3">{el.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosParcour;
