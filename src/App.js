import React from "react";
import "./App.css";
import P1 from "../src/assets/img/team/1.jpg";
import P2 from "../src/assets/img/team/SixSigma.png";
import P3 from "../src/assets/img/team/3.jpg";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Footer from "./components/Footer";



function App() {
  const publicationLinks = [
    {
      image: P1,
      title: "Flawless Launches",
      caption: "Published 2020",
      link: "#",
    },
    {
      image: P2,
      title: "Six Sigma",
      caption: "Published 2009",
      link:
        "https://www.amazon.com/Applying-Software-Hardware-Systems-paperback/dp/0133359468",
    },
    {
      image: P3,
      title: "Articles",
      caption: "Authored or Co-Authored",
      link: "#",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Bio />
      <Publications publicationLinks={publicationLinks}></Publications>
        <Contact />
      {/* //START OF CONTACT FORM SECTION// */}
      {/* <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact</h2>
              <h3 className="section-subheading text-muted">Interested In More Information? Or Ask About A Consultation!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* //END OF CONTACT FORM SECTION// */}

      <Footer />
    </div>
  );
}

export default App;
