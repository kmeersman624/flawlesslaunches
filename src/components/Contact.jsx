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
    const { status } = this.state;
    return (
      <div className="page-section" id="contact">
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
                onSubmit={this.submitForm}
                action="https://formspree.io/xdowqbrv"
                method="POST"
                id="contactForm"
                name="sentMessage"
                noValidate="noValidate"
              >
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <input type="text" name="message" />
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <button>Submit</button>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
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
