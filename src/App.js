import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./App.css";
import Accueil from "./pages/Accueil";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Àpropos from "./pages/Àpropos";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Service from "./pages/Service";
import Actualités from "./pages/Actualités";
import Partenaires from "./pages/Partenaires";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Profile from "./UserProfile/page/Profile";
import { PrivetRoute } from "./HOC/PrivetRoute";
 import { isUserLoggedIn } from "./authentication/Redux/SignInAction";
import Register from "./pages//Register";
import Dhabord from "./Dashbord/pages/Dhabord";
import Test from "./components/test";
import Services from "./Dashbord/components/Services";
import Témoignage from "./Dashbord/components/Témoignage";
import { isAdminLoggedIn } from "./authentication/Redux/adminLogInAction";
import SigninAdminSection from './authentication/components/logInAdmin'

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.signInStore);

  const authAdmin = useSelector((state) => state.adminStore);
  
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  

  return (
    <div className="hjk">
      <BrowserRouter>
         <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/apropos">
            <Àpropos />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/actualités">
            <Actualités />
          </Route>
          <Route path="/partenaires">
            <Partenaires />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/admin">
            <SigninAdminSection />
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>
          <PrivetRoute path="/profile" component={Profile} />

          <Route path="/actualité">
            <Test />
          </Route>
          {/*Dashboard*/}
          <Route path="/dashbord" component={Dhabord} />
        
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Témoignage">
            <Témoignage />
          </Route>
        </Switch>
      </BrowserRouter>

     </div>
  );
}

export default App;
