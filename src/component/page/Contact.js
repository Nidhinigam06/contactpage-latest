import React from "react";
import "./style.css";
const Contact = () => {
  return (
    <>
      <section className="main_container">
        <div className="container">
          <div className="content">
            <h3>Contact</h3>
            <div className="link">
              <span>Home </span>
              <span> Contact </span>
            </div>
          </div>
        </div>
      </section>
      <section className="main_card">
        <div className="Contact_card">
          <h5>Contact Us</h5>
          <p>Need Any Consultations to Booked your Seat</p>
          <div className="Link1">
            <span>Australia</span>
            <span>New York</span>
          </div>
        </div>
        <div className="box">
          <div className="element">
            <h4>Send Us Message</h4>
            <p className="Pragraph">Your email address will not be published. Required fields are
              marked *</p>
          </div>
          <div className="btn">
            <button> Full Name</button>
            <button>Phone</button>
            <button> Email</button>
            <button> Subject</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
