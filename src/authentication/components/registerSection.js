import React, { useState, useEffect } from "react";
import Background from "../../images/bg-img.jpeg";
import "../../App.css";
import { Input } from "../../HOC/Input";
import { register } from "../Redux/registerAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "../../shared/Footer";

const RegisterSection = () => {
  const auth = useSelector((state) => state.registerStore);

  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const signUp = (e) => {
    e.preventDefault();

    const user = {
      nom,
      prenom,
      sexe,
      telephone,
      email,
      password,
     };
    dispatch(register(user));
 
  };

  if (auth.authenticate) {
    return <Redirect to={`/signIn`} />;
  }

  return (
    <div>
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <br />
        <br />
        <h1 className="testaa">
           <span id="tests">R</span>egister
        </h1>
        <br />
        <br />
 

<div className="contact " >
        <div className="container-fluid" id='rest' >
             <div className="row  ">
               <div className="col-md-6"  id="colaco" >
                <div className="contact-form"  id="register-test"> 
                  
                  <form name="sentMessage" id="re-form"  onSubmit={signUp} encType="multipart/form-data" >
                    <div className="control-group">
                      <Input
                        type="text"
                        className="email-testa"
                        id="email"
                        placeholder="Nom"
                        name="nom"
                        required="required"
                        data-validation-required-message="Entrer ton Nom"
                        onChange={(e) => {
                          setNom(e.target.value);
                        }}
                      />

                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Prenom"
                        name="prenom"
                        required="required"
                        data-validation-required-message="entrer ton Prenom"
                        onChange={(e) => {
                          setPrenom(e.target.value);
                        }}
                      />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Sexe"
                        name="sexe"
                        required="required"
                        data-validation-required-message="entrer ton Sexe"
                        onChange={(e) => {
                          setSexe(e.target.value);
                        }}
                      />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Telephone"
                        name="telephone"
                        required="required"
                        data-validation-required-message="entrer ton Telephone"
                        onChange={(e) => {
                          setTelephone(e.target.value);
                        }}
                      />
                      <p className="help-block"></p>
                    </div>

                    <div className="control-group">
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />

                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <Input
                        type="password"
                        className="form-control"
                        id="subject"
                        placeholder="password"
                        name="password"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      
                      <p className="help-block"></p>
                    </div>

                    <div id="signin-btn">
                      <button id="register-btn"
                        className="btn"
                        type="submit"
                       >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
             </div>
   

 
     
  </div>
  
</div>
<hr />
<Footer />
      </div>

    </div>
  );
};

export default RegisterSection;
