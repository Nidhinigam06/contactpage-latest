import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <>
      <section className="hero cointainer">
        <div className="main-card-cointainer">
          <div className="background-image" />
          <div className="image-content">
            <p>Contact</p>
          </div>

          <div className="list-item">
            <ul>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="main-card ">
          <div className="Contact-us ">
            <h6>Contact Us</h6>
            <p>Need Any Consultations to Booked your Seat</p>
            <div>
              <ul>
                <li>Australia</li>
                <li>New York</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="Send Us Message">
            <h5>Send Us Message</h5>
            <p>
              Your email address will not be published. Required fields are
              marked{" "}
            </p>
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
