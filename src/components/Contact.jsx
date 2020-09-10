import React from "react";
// import axios from "axios";
import "../App.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xdowqbrv"
        method="POST"
      >

        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
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

// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       status: "",
//     };
//   }

//   render() {
//     const { status } = this.state;
//     return (
//       <form onSubmit={this.submitForm}
//       action="https://formspree.io/xdowqbrv"
//       method="POST">
//       <section className="page-section" id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <h2 className="section-heading text-uppercase">Contact</h2>
//               <h3 className="section-subheading text-muted">
//                 Interested In More Information? Or Ask About A Consultation!
//               </h3>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <form
//                 id="contactForm"
//                 name="sentMessage"
//                 noValidate="noValidate"
//               >
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="name"
//                         type="text"
//                         placeholder="Your Name *"
//                         required="required"
//                         data-validation-required-message="Please enter your name."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="email"
//                         type="email"
//                         placeholder="Your Email *"
//                         required="required"
//                         data-validation-required-message="Please enter your email address."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="phone"
//                         type="tel"
//                         placeholder="Your Phone *"
//                         required="required"
//                         data-validation-required-message="Please enter your phone number."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         placeholder="Your Message *"
//                         required="required"
//                         data-validation-required-message="Please enter a message."
//                       ></textarea>
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="clearfix"></div>
//                   <div className="col-lg-12 text-center">
//                     <div id="success"></div>

//                     {status === "SUCCESS" ? <p>Thanks!</p> : <button
//                       id="sendMessageButton"
//                       className="btn btn-primary btn-xl text-uppercase"
//                       type="submit"
//                     >
//                       Send Message
//                     </button>
//                     }
//                     {status === "ERROR" && <p>Ooops! There was an error.</p>}
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       </form>
//     );
//   }

//   submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: "SUCCESS" });
//       } else {
//         this.setState({ status: "ERROR" });
//       }
//     };
//     xhr.send(data);
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url: "https://localhost:3002/send",
//       data: this.state,
//     }).then((response) => {
//       if (response.data.status === "success") {
//         alert("Message Sent");
//         this.resetForm();
//       } else if (response.data.status === "fail") {
//         alert("Message failed to send");
//       }
//     });
//   }
//   render() {
//     return (
//       <section className="page-section" id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <h2 className="section-heading text-uppercase">Contact</h2>
//               <h3 className="section-subheading text-muted">
//                 Interested In More Information? Or Ask About A Consultation!
//               </h3>
//             </div>
//           </div>
//           <div className="row">
//             <div className= "col-lg-12">
//               <form
//                 id="contactForm"
//                 onSubmit={this.handleSubmit.bind(this)}
//                 method="POST"
//                 name="sentMessage"
//                 noValidate="noValidate"
//               >
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="name"
//                         type="text"
//                         placeholder="Your Name *"
//                         value={this.state.name}
//                         onChange={this.onNameChange.bind(this)}
//                         required="required"
//                         data-validation-required-message="Please enter your name."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="email"
//                         type="email"
//                         placeholder="Your Email *"
//                         value={this.state.email}
//                         onChange={this.onEmailChange.bind(this)}
//                         required="required"
//                         data-validation-required-message="Please enter your email address."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         className="form-control"
//                         id="phone"
//                         type="tel"
//                         placeholder="Your Phone *"
//                         value={this.state.phone}
//                         onChange={this.onPhoneChange.bind(this)}
//                         data-validation-required-message="Please enter your phone number."
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         placeholder="Your Message *"
//                         value={this.state.message}
//                         onChange={this.onMessageChange.bind(this)}
//                         required="required"
//                         data-validation-required-message="Please enter a message."
//                       ></textarea>
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="clearfix"></div>
//                   <div className="col-lg-12 text-center">
//                     <div id="success"></div>
//                     <button
//                       id="sendMessageButton"
//                       className="btn btn-primary btn-xl text-uppercase"
//                       type="submit"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
//   onNameChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   onPhoneChange(event) {
//     this.setState({ phone: event.target.value });
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value });
//   }
// }

// export default App;
