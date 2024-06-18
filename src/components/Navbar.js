import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div className={`container-fluid bg-${props.mode} mb-3 mt-0`}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} container`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="https://github.com/harsh432004"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link active"
                >
                  Source Code
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "white"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode === "light" ? "Dark" : "Light"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = { title: "Set title here", about: "About text here" };
