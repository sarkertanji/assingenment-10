import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { img, name, description, id } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <small>{description}</small>
      <Link to={`/singleService/${id}`}>
        <Button className="my-2 px-4" variant="outline-info">
          Detail
        </Button>
      </Link>
    </div>
  );
};

export default Service;
