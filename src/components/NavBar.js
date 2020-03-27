import React from "react";
import logo from "../img/icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/">
          <img
            className="navbar-brand"
            src={logo}
            style={{ paddingTop: "3px", height: "30px" }}
            alt="hipeerLab"
          />
          HipeerLab
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gratidao!">
                Contribua
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/respiradores">
                Respiradores
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/suprimentos">
                Suprimentos
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
