import React, { useEffect, useState } from "react";
import "./Services.css";
import img from "../../img/Group 767.png";
import Service from "../servise/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./hospitalFd.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-container">
      <h1>Choose Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut
        veritatis incidunt, sit voluptatibus odit.
      </p>
      <div className="services">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
