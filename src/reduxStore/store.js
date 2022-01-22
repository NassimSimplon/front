import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ServicesReducer } from "../redux/services/reducerService";
import { réalisationReducer } from "../redux/NosRéalisations/reducerRéalisations" 
import { parcoursReducer } from "../redux/NosParcoursDesFormationsSection/reducerParcours";
import { partenairesReducer } from "../redux/NosPartenaires/reducerPartenaires"  
import { témoignagesReducer } from "../redux/Témoignage/reducerTémoignage"
import { actualitéReducer } from "../redux/Actualités/reducerActualités" 
import { contactReducer } from "../redux/Contact/reducerContact"
import { signInReducer } from "../authentication/Redux/SignInReducer.js"
import { registerReducer } from "../authentication/Redux/registerReducer"
import {userReducer} from '../Dashbord/redux/User/UserReducer'
import {serviceReducer} from '../Dashbord/redux/Services/ServicesReducer'
import { adminLogInReducer } from "../authentication/Redux/adminLoginReducer"

  //all reducers
const Reducers = combineReducers({
  
  //Iinterface Reducers
  serviceStore: ServicesReducer,
  réalisationStore: réalisationReducer,
  parcourStore:parcoursReducer,
  partenaireStore:partenairesReducer,
  témoignageStore:témoignagesReducer,
  actualitéStore : actualitéReducer,
  contactStore :contactReducer,
  
  // Sign In Reducer
  signInStore : signInReducer,

  // Register Reducer
  registerStore : registerReducer,

  //Admin LogIn
  adminStore:adminLogInReducer,
  //Dashbord Reducer
  userReducer,
  serviceReducer,



});
//store
const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
