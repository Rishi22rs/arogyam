import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="service-container contact-container" id="contact">
      <h1 style={{color:"#1D7EBF"}}>CONTACT US</h1>
      <div className="detail row">
      <p className="col-md-4"><a className="our-color" 
      style={{wordWrap: 'break-word'}}
      href="mailto:support@ambrosiaenterprises.com">abhishek.k.arya@gmail.com</a></p>
        <p className="col-md-4 our-color">
        Near Union Bank of India, Sector-B, Vijay Nagar, Nilmatha, Lucknow, Uttar Pradesh 226002
        </p>
        <p className="col-md-4 our-color">Tel: +91 9305962783 </p>
      </div>
      <form className="form row">
        <input
          className="col-xl inp"
          type="text"
          name="name"
          placeholder="Name*"
        />
        <input
          className="col-xl inp"
          type="email"
          name="email"
          placeholder="Email*"
        />
        <input
          className="col-md-12 inp"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea className="inp" placeholder="Message" name="message" />
        <button className="my-btn-search">Send</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
