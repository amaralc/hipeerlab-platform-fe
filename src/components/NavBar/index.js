import React from "react";
import logo from "../../img/icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">hipeerLab</a>
        

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
              <Link className="nav-link" to="/contribua">
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
            <li className="nav-item">
              <Link className="nav-link" to="/equipe">
                Equipe
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">
                Noticias
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ins-ic mr-3" role="button" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-social-icon btn-instagram"
                href="https://www.instagram.com/hipeerlab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
