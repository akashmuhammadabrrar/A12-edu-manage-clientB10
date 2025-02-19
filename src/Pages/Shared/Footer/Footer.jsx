import React from "react";
import logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-20">
      <aside>
        <img src={logo} alt="" />
        <p>
          Ed Manage Ltd.
          <br />
          Providing reliable tech since 1999
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/branding" className="link link-hover">
          Branding
        </Link>
        <Link to="/marketing" className="link link-hover">
          Marketing
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contacts" className="link link-hover">
          Contact
        </Link>
        <Link to="/blogs" className="link link-hover">
          Blogs
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
