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
              About Flawless Launches
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
              This book shares a proven path to successful, profitable new
              products. Developing profitable products and launching them,
              flawlessly, requires a different type of thinking than most of us
              may be used to. Probabilistic, model-based thinking, also called
              Predictive Engineering, is applied to defining profitable products
              to delight customers and investors. It is then applied during
              product development to ensure that customer expectations are met
              or exceeded, and business expectations for cost and time to market
              are also met. The supply chain is prepared so that the new product
              is launched with optimized yield, cycle time and cost. Success
              stories are shared, along with an overview of transformational
              leadership to help the organization both expect and celebrate
              flawless launches of profitable products.
            </p>
            <p className="large text-muted">
              The Author Dr. Eric Maass was a co-founder of the{" "}
              <a href="https://www.sigmaexperts.com/"> Six Sigma</a> methods at
              Motorola, and was a key advocate for the focus on variance
              reduction; his article on a "Strategy to Reduce Variance" was
              published in 1987, the year that Motorola announced Six Sigma. He
              is now taking on an educator role consulting businesses on how to
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
