import axios from "axios";
import {SignInUrl,registerUrl,AdminUrl} from './ApiUrls'


  //                                  SignIn requests

    
  export const fetchLogin = (token) =>
  axios
    .post(SignInUrl,token)


  //                                  register requests

    
  export const fetchRegister = (user) =>
    axios
    .post(registerUrl,{...user}).then((res) => res.data);


      //                                  Admin LogIn requests

    
  export const fetchAdmin = (token) =>
  axios
    .post(AdminUrl,token)
