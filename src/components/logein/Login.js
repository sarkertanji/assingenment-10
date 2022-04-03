import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleLogin, error, googleSignin } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const handleGoogleSignin = () => {
    googleSignin().then((result) => {
      navigate(from);
    });
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
          handleLogin(email, pass);
        }}
        className="p-5 "
      >
        <h4>Please Log in</h4>
        <Row className="  mb-3">
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
            New here? <Link to="/signup">Sign Up</Link>
          </p>
        </Form.Group>
        <span className="p-2 text-danger">{error}</span> <br />
        <Button variant="outline-primary" type="submit">
          Log in
        </Button>
        <Button
          onClick={handleGoogleSignin}
          className="mx-2"
          variant="outline-primary"
        >
          Sign In By Google
        </Button>
      </Form>
    </div>
  );
};

export default Login;
