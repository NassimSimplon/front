import React from 'react'
import aboutSectionImage from '../images/aboutSectionImage.png'
const AproposSection = () => {
    return (
        <div>
             <div className="about  "  id="about">
            <div className="container-fluid  ">
                <div className="row align-items-center  ">
                    <div className="col-lg-6 mt-5">
                        <div className="about-img">
                            <img src={aboutSectionImage} alt="team Image" />
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
                                </p>
                            </div>
                            
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AproposSection
