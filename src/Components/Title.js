import React from "react";
import { Parallax } from "react-parallax";
import img1 from "../Graphics/1.jpg";
import logo from "../Graphics/logo.png"

const Title = () => {
  return (
    <div className="service-container">
      <div className="my-titles">
        <div className="logo-title">
          <img className="logo" height={100} src={logo} alt="logo"/>
          <h1 className="my-title">Arogyam Physiotherapy</h1>
        </div>
        <h4 className="my-title cont"><span><hr/></span>Rehabilitation & Pain Clinic<br/>
We keep you moving<span><hr/></span></h4>
      </div>
      <Parallax
          className="my-img"
          bgImage={img1}
          bgImageAlt="alt"
          strength={400}
        >
          <div className="our-container our-rooms" style={{opacity: 0}}>
            <h1 className="our-title-color">OUR SERVICE</h1>
            <p className="our-color">
            Business Consulting
            </p>
          </div>
        </Parallax>
    </div>
  );
};

export default Title;
