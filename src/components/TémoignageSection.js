import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTémoignages ,addTémoignage} from "../redux/Témoignage/actionTémoignage";

import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jwt_decode from 'jwt-decode'
import Slider from "react-slick";
const TémoignageSection = () => {
 
  //carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const témoignage = useSelector((state) => state.témoignageStore.témoignage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTémoignages());
  }, []);
  const auth = useSelector((state) => state.signInStore);
   const visitTem = ()=>{
    return(
      <div className="container mb-5">
      <div className="owl-carousel témoignages-carousel">
        <Slider {...settings} className="mt-5">
          {témoignage.map((el) => (
            <div className="témoignage-item me-5 " key={el._id}>
              <div className="témoignage-img">
                <img src={el.userImage} alt="Image" id="tem-img" />
              </div>
              <div className="témoignage-text">
                <p>{el.comment} </p>
                <h3>
                  {el.userNom}  {el.userPrenom} 
                </h3>
              </div>
            </div>
          ))}
        </Slider>

        <div className="témoignage-icon mb-5">
          <i className="fa fa-quote-left mt-5"></i>
        </div>
       </div>
    </div>
    )
  }
   
  
     
  
 
  const userTem = () =>{
    const token  = localStorage.getItem('token')
  const result = jwt_decode(token)
  
     const [input, setInput] = useState({
      userNom: result.nom,
      userPrenom:result.prenom,
      userImage: result.image,
      comment:''
    
    });
    const addNewContact = () => {
      dispatch(addTémoignage(input.userNom, input.userPrenom, input.userImage,input.comment));
      console.log("tem", input);
    };
    const badel = () => {
      window.location.reload(addNewContact())
    }
    return(
      <div className="container mb-5">
      <div className="owl-carousel témoignages-carousel">
        <Slider {...settings} className="mt-5">
          {témoignage.map((el) => (
            <div className="témoignage-item me-5 " key={el._id}>
              <div className="témoignage-img">
                <img src={el.userImage} alt="Image" id="tem-img" />
              </div>
              <div className="témoignage-text">
                <p>{el.comment} </p>
                <h3>
                  {el.userNom} {el.userPrenom} 
                  
                </h3>
              </div>
            </div>
          ))}
        </Slider>

        <div className="témoignage-icon mb-5">
          <div className="text-white " id='tem-user'>
            
          <div className="control-group" id='fesfes' >
                      <input
                      onChange={(e)=>{setInput({...input,comment:e.target.value})}}
                        type="email"
                        id="chika"
                         placeholder="Enter votre Témoignage"
                        name="email"
                        required="required"
                        data-validation-required-message="Enter votre Témoignage"  
                      />

<div id="signin-btn">
                      <button
                      onClick={badel}
                        
                        type="submit"
                        id="fesfes-btn"
                      ><svg xmlns="http://www.w3.org/2000/svg" id='lit' width="22" height="22" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>       </button>
                    </div>
                    </div>
                   
          </div>
          <i className="fa fa-quote-left mt-5"></i>
        </div>
       </div>
    </div>
    )
  }
  return (
    <div className="témoignage  ">
      <br/>
      <h1 className="temoignage-title text-center mt-2  ">Témoignage</h1>

      {auth.authenticate
              ? userTem()
              : visitTem()}
    </div>
  );
};

export default TémoignageSection;
