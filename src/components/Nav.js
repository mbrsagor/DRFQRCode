import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav navbar-expand-lg navbar-inverse navbar-dark navbar-fixed-top bg-dark">
        <Link to="/">
          <span className="navbar-brand">Django React App</span>
        </Link>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" exact>
                <span className="nav-link">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" activeClassName="active">
                <span className="nav-link">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" activeClassName="active">
                <span className="nav-link">Login</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registration" activeClassName="active">
                <span className="nav-link">Registration</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
