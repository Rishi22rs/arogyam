import React, { useEffect, useState } from "react";
import { content } from "../Content/OurServiceContent";
import Collapse from "./Collapse";
import Social from "./Social";

const TopNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1100) setIsMobile(true);
    window.addEventListener("resize", () => {
      window.innerWidth < 1100 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  return (
    <nav className="topNav">
      {!isMobile ? (
        <>
          <a className="links" href="#">
            HOME
          </a>
          <a className="links" href="#about">
            ABOUT
          </a>
          <a className="links" href="#rooms">
            SERVICES
          </a>
          <a className="links" href="#rooms">
            PATIENT REVIEWS
          </a>
          <a className="links" href="#contact">
            CONTACTS
          </a>
        </>
      ) : (
        <>
          <button className="my-btn drop" onClick={() => setIsExpanded(true)}>
            &#9776;
          </button>
        </>
      )}
      <button className="my-btn">{`Start today >`}</button>
      {!isMobile && <Social />}
      {isMobile && (
        <Collapse isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      )}
    </nav>
  );
};

export default TopNav;
