import React from "react";
import { Parallax } from "react-parallax";
import img2 from "../Graphics/2.jpg";

const OurRoom = () => {
  return (
    <>
      <div id="rooms">
        <Parallax
          className="my-img"
          bgImage={img2}
          bgImageAlt="alt"
          strength={600}
        >
          <div className="our-container our-rooms">
            <h1 className="our-title-color" style={{color:"#1D7EBF"}}>OUR SERVICE</h1>
            <p className="our-color">
              <span className="service-title">Consultation</span><br/>
              <span style={{fontSize:20}}>Turning your pain into relief.</span>
            </p>
            <button className="my-btn revert"><a style={{color:"white"}}href="#contact">More Info</a></button>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default OurRoom;
