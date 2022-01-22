import React, { useState, useEffect } from "react";
import "../App.css";
import Background from "../images/bg-img.jpeg";
import { addContact } from "../redux/Contact/actionContact";
import { useDispatch } from "react-redux";
import img from "../images/contat-img.jpg";

const ContactSection = () => {
  //add contact
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const hanleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log("input", input);
  };

  const addNewContact = () => {
    dispatch(addContact(input.name, input.email, input.subject, input.message));
    console.log("inpuuuuuuuuuuuut", input);
  };
  return (
    <div className="contact-section">
      <div
        className="apropos-page"
        id="home"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <br />
        <br />
        <h1 className="testaa">
          <span id="tests">C</span>ontact
        </h1>
        <br />
      </div>

      <div className="contact  " id="contact">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6  ">
                <img src={img} width="120%" id="contact-img" className="my-5" />
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <div id="success"></div>
                  <form name="sentMessage" id="contactForm">
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                        onChange={(e) => hanleChange(e)}
                      />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                        onChange={(e) => hanleChange(e)}
                      />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        name="subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                        onChange={(e) => hanleChange(e)}
                      />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        required="required"
                        name="message"
                        data-validation-required-message="Please enter your message"
                        onChange={(e) => hanleChange(e)}
                      ></textarea>
                      <p className="help-block"></p>
                    </div>
                    <div>
                      <button
                        className="btn"
                        type="submit"
                        id="sendMessageButton"
                        onClick={addNewContact}
                      >
                        Send Message
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
  );
};

export default ContactSection;
