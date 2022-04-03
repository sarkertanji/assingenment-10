import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";

const Signup = () => {
  const { handleEmailSignIn, error, googleSignin, handleGoogleSignin } =
    useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPass = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className="form">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailSignIn(email, pass, name);
        }}
        className="p-5 "
      >
        <h4>Please Sign up First</h4>
        <Row className="  mb-3">
          <Form.Group as={Row} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={getName}
              className="w-75"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onBlur={getEmail}
              className="w-75"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={getPass}
              className="w-75"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <p>
            Alrady have an account? <Link to="/login">Log in</Link>
          </p>
        </Form.Group>
        <span className="p-2 text-danger">{error}</span> <br />
        <Button variant="outline-primary" type="submit">
          Sign up
        </Button>
        <Button
          onClick={googleSignin}
          className="mx-2"
          variant="outline-primary"
        >
          Sign In By Google
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
