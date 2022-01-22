import React from "react";
import AproposSection from "../components/AproposSection";
import DescriptionSection from "../components/descriptionSection";
import ServiceSection from "../components/ServiceSection";
import RéalisationSection from "../components/NosRéalisationsSection";
import NosParcour from "../components/NosParcoursDesFormationsSection";
import PartenaireSection from "../components/PartenaireSection";
import '../App.css'
import TémoignageSection from "../components/TémoignageSection";
import Actualités from "../components/ActualitésSection.js";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <DescriptionSection />
      <AproposSection />
      <div className="slogon mt-5">
        Avec Nass<span id="tests">X</span>, je réussis mon projet et je realise mes reves.
      </div>
      <ServiceSection />
      <RéalisationSection />
      <NosParcour />
      <PartenaireSection />
      <TémoignageSection  />
      <Actualités />
      <Footer />
    </div>
  );
};

export default Accueil;
