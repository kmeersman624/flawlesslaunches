import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
  };

  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact</h2>
              <h3 className="section-subheading text-muted">
                Interested In More Information? Or Ask About A Consultation!
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                id="contactForm"
                onSubmit={(e) => this.formSubmit(e)}
                name="sentMessage"
                novalidate="novalidate"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        value={this.state.name}
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        value={this.state.email}
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                        value={this.state.phone}
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
                        placeholder="Your Message *"
                        onChange={(e) =>
                          this.setState({ message: e.target.value })
                        }
                        value={this.state.message}
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
                      {this.state.buttonText}
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
  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };
}

export default Contact;
