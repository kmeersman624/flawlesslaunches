import React from "react";
// import axios from "axios";
import "../App.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    // const { status } = this.state;
    return (
      <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="section-heading text-uppercase">Contact</h1>
            <h3 className="section-subheading text-white">
              Interested In More Information? Or Ask About A Consultation!
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              id="contactForm"
              name="sentMessage"
              action="https://formspree.io/xdowqbrv"
              method="POST"
              noValidate="noValidate"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="phone"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Your Message *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
