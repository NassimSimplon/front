import React from 'react'
import ContactSection from '../components/ContactSection'
import '../App.css'
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Contact = () => {
    return (
        <div  >
                  <Navbar />      
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Contact
