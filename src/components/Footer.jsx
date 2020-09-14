import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <ul className="list-inline social-buttons">
              {/* <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li> */}
              <li className="list-inline-item">
                <a href="https://www.facebook.com/eric.maass.79">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/eric-maass-9304a3/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <span className="copyright">
              Copyright &copy; Flawless Launches 2020
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
