import React from "react";
import "../App.css";
import EM from "../assets/img/team/EM.png";


function Bio() {
    return (

      <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              About the Author
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={EM} alt={EM} />
              <h4>Dr. Eric Maass</h4>
              <p className="text-muted">Author / Engineer / Consultant</p>
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              As Engineering Director, Eric Maass is helping to lead and
              accelerate the DFSS / DRM program for Medtronic, and has been
              recognized with Medtronic's Star of Excellence Award.
            </p>
            <p className="large text-muted">
              Dr. Maass has more than thirty years of experience, ranging from
              research and development through manufacturing, to director of
              operations for a $160 million business and director of design
              and systems engineering for Motorola's RF Products Division.
            </p>
            <p className="large text-muted">
              Dr.Maass was a co-founder of the Six Sigma methods at Motorola,
              and was a key advocate for the focus on variance reduction; his
              article on a "Strategy to Reduce Variance" was published in
              1987, the year that Motorola announced Six Sigma. He is now
              taking on an educator role consulting businesses on how to
              optimize their strategies in conjunction to Authoring multiple
              books and articles, his most recent Flawless Launches.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Bio;