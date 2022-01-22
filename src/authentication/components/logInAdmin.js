import React,{useState,useEffect} from 'react'
import Background from "../../images/bg-img.jpeg";
 import { Input } from "../../HOC/Input";
import {loginAdmin} from '../Redux/adminLogInAction'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../../App.css'
const SigninAdminSection = (props) => {
      
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const auth = useSelector(state =>state.adminStore)
  const dispatch = useDispatch()
  
  const userLogin =(e)=>{
  e.preventDefault()
  const user = {
      email,
      password
  }
  dispatch(loginAdmin(user))

} 

if(auth.authenticate){
  return <Redirect to={`/dashbord`} />
}

  return (
    <div>
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
             <br/><br/>
        <h1 className="testaa"> <span id="tests">S</span>ign In</h1>
        <br/>
      </div>
      
      <div className="contact" id="contact">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 "></div>
              <div className="col-md-6">
                <div className="contact-form">
                  <div id="success"></div>
                  <form name="sentMessage" id="Admin"  onSubmit={userLogin}>
                    <div className="control-group">
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
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
                        className="form-control"
                        id="email"
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
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninAdminSection;
