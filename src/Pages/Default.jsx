import React, { Component } from "react";
import "./Page Styles/Default.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export class Default extends Component {
  render() {
    return (
      <div className="default-page-container">
        <Navbar />
        <div className="default-hero-area">
          <div className="default-main-heading">
            Welcome To <b> The Best Electrician Jobs</b>
          </div>
        </div>
        <div className="default-registration-wrapper">
          <h3 className="heading">Join if you are a recruiter</h3>
          <Link to="/login">
            <button className="big-btn login-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="big-btn signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Default;
