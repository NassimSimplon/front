import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllActualités,getActualité} from '../redux/Actualités/actionActualités'
import '../App.css'
import Background from "../images/bg-img.jpeg";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Test = ( ) => {
    const dispatch = useDispatch();
     const actualités = useSelector((state) => state.actualitéStore.actualité);
   const id  =    localStorage.getItem('id')
     useEffect(() => {
   
        dispatch(getActualité(id));
       }, []);
    return (
        <div>
          <Navbar />
            <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      ><br/><br/>
              <h1 className="testaa"> <span id="tests">A</span>ctualités</h1>

                       <br/> 
      </div>
<div id='one-ac'>
      <img id='ac-img' src={actualités.image} />
      <br/><br/>
      <h1 className="aka  text-center">   {actualités.title} </h1>
      <br/><br/>
      <div id="one-desc" >
      <p id="one-p">{actualités.description}</p>
      
      </div></div>
      <Footer />
        </div>
    )
}

export default Test
