import React from 'react';
import './App.css';
import EM from '../src/assets/img/team/EM.png';
import F1 from '../src/assets/img/team/1.jpg';
import F2 from '../src/assets/img/team/2.jpg';
import F3 from '../src/assets/img/team/3.jpg';



function App() {
  return (
    <div className="App">
      {/* //START OF HEADER SECTION// */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">A Book By Eric Maass</div>
            <div className="intro-heading text-uppercase">Flawless Launches</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">BUY NOW!</a>
          </div>
        </div>
      </header>
      {/* //END OF HEADER SECTION// */}
      {/* //START OF ABOUT AUTHOR SECTION// */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About the Author</h2>
              <h3 className="section-subheading text-muted">Flawless Launches and Six Sigma</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={EM} alt={EM}/>
                <h4>Eric Maass</h4>
                <p className="text-muted">Author / Engineer / Consultant</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
      {/* //END OF ABOUT AUTHOR SECTION// */}
      {/* //START OF PUBLICATIONS SECTION// */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Publications</h2>
              <h3 className="section-subheading text-muted">Authored or CoAuthored By Eric Maass</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={F1} alt={F1}/>
                <h4>Flawless Launches</h4>
                <p className="text-muted">Published 2020</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={F2} alt={F2}/>
                <h4>Six Sigma</h4>
                <p className="text-muted">Published 2009</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={F3} alt={F3}/>
                <h4>Other Publications</h4>
                <p className="text-muted">Other Publications</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
      {/* //END OF PUBLICATIONS SECTION// */}
      {/* //START OF CONTACT FORM SECTION// */}
      <section className="page-section" id="contact">
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
      </section>
      {/* //END OF CONTACT FORM SECTION// */}
    </div>
  );
}

export default App;
