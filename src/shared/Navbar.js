import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../authentication/Redux/SignInAction";
import "../UserProfile/profile.css";
import { Link ,Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const auth = useSelector((state) => state.signInStore);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout()) && <Redirect to={`signIn`} />;
  };

  const jareb = () => {
    window.location.reload(logout())  ;
  };

  const renderLoggedInLinks = () => {
    const result = localStorage.getItem("token");
    const token = jwt_decode(result);
    console.log(token)
    return (
      <div className="navbar-nav  " id="all-links">
        <Link to="/" className="nav-item nav-link active">
          Accueil
        </Link>

        <Link to="/apropos" className="nav-item nav-link">
          À propos
        </Link>

        <Link to="/service" className="nav-item nav-link">
          Nos Service
        </Link>
        <Link to="/actualités" className="nav-item nav-link">
          Actualités
        </Link>
        <Link to="/partenaires" className="nav-item nav-link">
          Partenaires
        </Link>
        <Link to="/contact" className="nav-item nav-link">
          Contact
        </Link>

        <div className="jari">
          <img src={token.image} id="profile-img" />
          <p  id="profile-name">
            
             <b> {token.nom}  <span>  </span> </b> 
          </p> 
        </div>
        <Link to={`/signIn`} className="nav-item nav-link" id="signOut" onClick={jareb}>
          signout
        </Link>
      </div>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <div className="navbar-nav  ml-auto">
        <Link to="/" className="nav-item nav-link active">
          Accueil
        </Link>

        <Link to="/apropos" className="nav-item nav-link">
          À propos
        </Link>

        <Link to="/service" className="nav-item nav-link">
          Nos Service
        </Link>
        <Link to="/actualités" className="nav-item nav-link">
          Actualités
        </Link>
        <Link to="/partenaires" className="nav-item nav-link">
          Partenaires
        </Link>
        <Link to="/contact" className="nav-item nav-link">
          Contact
        </Link>
        <Link to="/signIn" className="nav-item nav-link">
          Sign in
        </Link>
        <Link to="/register" className="nav-item nav-link" id="connet-btn">
          Register
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
        <div className="container-fluid">
          <h1 href="index.html" className="navbar-brand">
            Nass<span className="spana">X</span>
          </h1>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between "
            id="navbarCollapse"
          >
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
