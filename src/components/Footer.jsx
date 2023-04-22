import React from "react";
import logo1 from "../images/logos1.jpeg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <Link to="/" className="logo">
            <img src={logo1} alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/service">Servislər</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Bloq</Link>
            </li>
            <li>
              <Link to="/contact">Bizimlə Əlaqə</Link>
            </li>
            <li>
              <Link to="/about">Haqqımızda</Link>
            </li>
          </ul>
          <div className="medias">
            <div className="media">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="media">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="media">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="media">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <p>© Copyright 2022, All Rights Reserved by TrustCenter MMC</p>
      </div>
    </footer>
  );
}

export default Footer;
