import React,{useState,useEffect} from 'react'
import Background from "../../images/bg-img.jpeg";
 import { Input } from "../../HOC/Input";
import {login} from '../Redux/SignInAction'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../App.css'
import Footer from "../../shared/Footer";

const SigninSection = (props) => {
      
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const auth = useSelector(state =>state.signInStore)
  const dispatch = useDispatch()
  
  const userLogin =(e)=>{
  e.preventDefault()
  const user = {
      email,
      password
  }
  dispatch(login(user))

} 

if(auth.authenticate){
  return <Redirect to={`/profile`} />
}

  return (
    
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
             <br/><br/>
        <h1 className="testaa"> <span id="tests">S</span>ign In</h1>
         <div className="container">
    <div className="row">
      <div className="col-md-3 "></div>
      <div className="col-md-6" >
      <div id="test-contactt">
      <div className="contact"  id="test-yg">
        <div className="container-fluid" id="test-yu">
          <div className="container">
            <div className="row align-items-center" id="test-yu">
              <div className="col-md-3 "></div>
              <div className="col-md-6 d-flex justify-content-center  " id="fest">
                <div className="contact-form" id="signIn-Sec" >
                  <div id="success"></div>
                  <form name="sentMessage" id="signinSection"  onSubmit={userLogin}>
                    <div className="control-group">
                      <Input
                        type="email"
                        id="tchika"
                         placeholder="Your Email"
                        name="email"
                        required="required"
                        data-validation-required-message="Please enter your email"  onChange={(e)=>{setEmail(e.target.value)}}
                      />

                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <Input
                        type="password"
                        id="tchika"
                         placeholder="password"
                        name="password"
                        required="required"
                        data-validation-required-message="Please enter a subject"  onChange={(e)=>{setPassword(e.target.value)}} 
                      />
                      <p className="help-block"></p>
                    </div>

                    <div id="signin-btn">
                      <button
                        className="btn"
                        type="submit"
                        id="sendMessageButton"
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
      </div>
      </div>
      </div>
     </div>
  </div>
  <br/>
  <hr/>
  <Footer/>
      </div>

   );
};

export default SigninSection;
