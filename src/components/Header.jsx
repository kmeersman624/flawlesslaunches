import React from "react";
import "../App.css";
import FL from "../assets/img/logos/white_logo.png";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          
          <img className="LOGO" src={FL} alt={FL} />
          <br></br>
          <div className="intro-lead-in">A Book By Dr. Eric Maass</div>
          
          {/* <div className="intro-heading text-uppercase">Flawless Launches</div> */}
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            BUY NOW!
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
