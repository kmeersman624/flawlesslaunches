import React from 'react';
import './App.css';
import EM from '../src/assets/img/team/EM.png';
import P1 from '../src/assets/img/team/1.jpg';
import P2 from '../src/assets/img/team/SixSigma.png';
import P3 from '../src/assets/img/team/3.jpg';
import Publications from './components/Publications';



function App() {
  const publicationLinks = [
    {
      image: P1,
      title: 'Flawless Launches',
      caption: 'Published 2020',
      link: '#'
    },
    {
      image: P2,
      title: 'Six Sigma',
      caption: 'Published 2009',
      link: 'https://www.amazon.com/Applying-Software-Hardware-Systems-paperback/dp/0133359468'
    },
    {
      image: P3,
      title: 'Articles',
      caption: 'Authored or Co-Authored',
      link: '#'
    }
  ]

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
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={EM} alt={EM}/>
                <h4>Dr. Eric Maass</h4>
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
              <p className="large text-muted">As Engineering Director, Eric Maass is helping to lead and accelerate the DFSS / DRM program for Medtronic, and has been recognized with Medtronic's Star of Excellence Award.</p>
              <p className="large text-muted">Dr. Maass has more than thirty years of experience, ranging from research and development through manufacturing, to director of operations for a $160 million business and director of design and systems engineering for Motorola's RF Products Division.</p>
              <p className="large text-muted">Dr.Maass was a co-founder of the Six Sigma methods at Motorola, and was a key advocate for the focus on variance reduction; his article on a "Strategy to Reduce Variance" was published in 1987, the year that Motorola announced Six Sigma. He is now taking on an educator role consulting businesses on how to optimize their strategies in conjunction to Authoring multiple books and articles, his most recent Flawless Launches.</p>
            </div>
          </div>
        </div>
      </section>
      {/* //END OF ABOUT AUTHOR SECTION// */}

      {/* //START OF PUBLICATIONS SECTION// */}
      <Publications publicationLinks={publicationLinks}></Publications>
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

      {/* //START OF FOOTER SECTION// */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
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
                  <a href="https://www.linkedin.com/in/eric-maass-9304a3/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <span className="copyright">Copyright &copy; Flawless Launches 2020</span>
            </div>
          </div>
        </div>
      </footer>
      {/* //END OF FOOTER SECTION// */}
    </div>
  );
}

export default App;
