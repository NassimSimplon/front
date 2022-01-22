import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTémoignages ,deleteTémoignage} from "../../redux/Témoignage/actionTémoignage";
import DashSideBar from "./DashSideBar";
import Background from "../../images/bg-img.jpeg";
import '../../App.css'
  
 
const TémoignageSection = () => {
 
  const témoignage = useSelector((state) => state.témoignageStore.témoignage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTémoignages());
  }, []);
  const deleteItem = (id) => {
    dispatch(deleteTémoignage(id));
  };
  return (
    <div className="container" >
 
        <div className="row">
            <div className="col-md-2"><DashSideBar /></div>
            <div className="blog" id="blog">
            <div className="container" id="blog-oo">
                <div className="section-header text-center ">
                    <p>Nos</p>
                    <h2>témoignage</h2>
                </div>
                <div className="row">
                   
                        {Object.keys(témoignage).map(el=>(
                         
                             <div className="col-lg-6" key={témoignage[el]._id} >
                        <div className="blog-item"  >
                            <div className="blog-img">
                                <img src={témoignage[el].userImage} alt="Blog" />
                            </div>
                            <div className="blog-text">
                               
                                <div className="blog-meta">
                                <h2 id="tem-tit">{témoignage[el].userNom}</h2>
                                 </div>
                           <p>{témoignage[el].comment}</p>
                           <svg
                        id="delete"
                        onClick={() => deleteItem(témoignage[el]._id)}
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
                      </svg>                            </div> </div>
                        </div>))}
                   
                   </div>
            </div>
            <div className="text-center">
            <button className="btn"   >Read More <i className="fa fa-angle-right"></i></button>
            </div>
        </div>  
             </div>
      
    </div>
  );
};

export default TémoignageSection;
