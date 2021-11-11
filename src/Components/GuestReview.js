import React from "react";
import { Parallax } from "react-parallax";
import img from "../Graphics/9.jpg";
import { Carousel } from '@trendyol-js/react-carousel';

const GuestReview = () => {
  return (
    <>
      <div id="rooms">
        <Parallax
          className="my-img"
          bgImage={img}
          bgImageAlt="alt"
          strength={600}
        >
          <div className="our-container our-rooms">
          <h1 className="our-title-color" style={{color:"#1D7EBF"}}>PATIENT REVIEW</h1>
            <div className="row"><div className="col-md-4 d-flex justify-content-around">
            <p className="our-color ">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own.
            </p></div>
            <div className="col-md-4">
            <p className="our-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own.
            </p></div>
            <div className="col-md-4">
            <p className="our-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own.
            </p></div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default GuestReview;
