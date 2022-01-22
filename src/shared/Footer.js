import React from 'react'
import '../App.css'
const Footer = () => {
    return (
       
               <div className="footer  "  >
                 <div className="container-fluid">
                    <div className="footer-info">
                        <h2>Nass<span className="footer-name">X</span></h2>
                        <h3> rue 123 , Omrane, Tunisie</h3>
                        <div className="footer-menu">
                            <p>+216 9371703</p>
                            <p>NassimKhlifi@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className=" copyright">
                    <p>&copy; <a href="#">Nass<span className="footer-name">X</span></a>, All Right Reserved | Designed By Nassim khlifi</p>
                </div>
                
        </div> 
    
    )
}

export default Footer
