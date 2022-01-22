import React from "react";
import "../App.css";
 import Background from "../images/bg-img.jpeg";
import logo from "../images/Nass.png";
import  DescriptionSection from '../components/descriptionSection'
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Àpropos = () => {
  return (
    <div >
        <Navbar />
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      > <br/><br/>
<h1 className="testaa"> <span id="tests">À</span> propos</h1>
<br/>

      </div>
         

   
   <div className="about mt-5  "  id="about"  >
            <div className="container-fluid  ">
                <div className="row align-items-center  ">
                    <div className="col-lg-6 mt-5">
                        <div className="about-img">
                            <img src={logo} alt="team Image" id="apropos-page-image" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>à propos</p>
                                <h2>Qui Sommes Nous ?</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                </p>
                            </div>
                            
                         </div>
                    </div>
                </div>
            </div>
        </div> <br/><br/> 
        <Footer />
         </div>
  );
};

export default Àpropos;
