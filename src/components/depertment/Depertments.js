import React from "react";
import "./depertments.css";
import img1 from "../../img/Group 767.png";

const Depertments = () => {
  return (
    <div className="depertment-container">
      <p>Our Depertment</p>
      <h1>We Care Our Patients.</h1>
      <div className="sectors">
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Health Check</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Operation Theater</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Pharmacy Support</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Ambulance Car</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Lat Tests</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
        <div className="sector">
          <img src={img1} alt="" />
          <h2>Intensive Care</h2>
          <p>
            We offer extensive medical procedures to outbound & inbound patients
            what it is and we are very proud achievement staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Depertments;
