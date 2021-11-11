import React from "react";

const Collapse = ({ isExpanded, setIsExpanded }) => {
  return (
    <>
      <div
        style={
          isExpanded
            ? {
                background: "#1D7EBF",
                position: "fixed",
                textAlign: "left",
                right: 0,
                bottom: 0,
                top: 0,
                transition: "0.2s",
                paddingLeft: "40px",
              }
            : { position: "fixed", left: -1000, transition: "0.2s" }
        }
      >
        {isExpanded && (
          <button
            className="cross-btn"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            &#10006;
          </button>
        )}
        <div className="row">
          <a
            className="links col-md-12"
            href="#"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            HOME
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#rooms"
          >
            SERVICES
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#service"
          >
            GUEST REVIEW
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#contact"
          >
            CONTACTS
          </a>
        </div>
      </div>
    </>
  );
};

export default Collapse;
