import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">A Book By Eric Maass</div>
          <div className="intro-heading text-uppercase">Flawless Launches</div>
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
