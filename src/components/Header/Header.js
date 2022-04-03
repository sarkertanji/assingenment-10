import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div>
      <nav className="navbar  navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            -MFC-
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active mx-2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-5">
              {user?.email ? (
                <button
                  onClick={logout}
                  className="btn btn-outline-primary mx-5"
                  type="submit"
                >
                  Lou out
                </button>
              ) : (
                <div>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-primary mx-2"
                      type="submit"
                    >
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-outline-primary" type="submit">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
              <p className="text-white mx-2 mt-2">
                WellCome: {user?.displayName}
              </p>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
