import React from 'react'
import "../App.css"
import team from '../images/descriptionSectionImage.png'
import Background from "../images/bg-img.jpeg";
import {Link} from 'react-router-dom'

const DescriptionSection = () => {
    return (
        <div>
             <div className="description" id="home" style={{ backgroundImage: `url(${Background})`
}}>
            <div className="container-fluid">
                <div className="row align-items-center mt-4">
                    <div className="col-sm-12 col-md-6">
                        <div className="description-content mt-5">
                            <div className="description-text">
                                 <h1  >Nass<span className="spana">X</span></h1>
                                 <div className="typed-text">Nous sommes la première entreprise de formation entrepreneuriale en Tunisie Nous avons proposé pour vous un parcours de formation pour devenir un entrepreneur </div> 
                            </div>
                            <div className="description-btn">
                                <Link to='/contact'>
                                <a className="btn" href="">Contactez-Nous</a>
                                </Link>
                             </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="description-image">
                            <img src={team} alt="description Image" />
                        </div>
                    </div>
                </div>       
                 <br/><br/><br/><br/> 
                  </div>
                  </div>
        </div>
       
    )
}

export default DescriptionSection
