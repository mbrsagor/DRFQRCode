import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
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
            <NavLink to="/" activeClassName="active">
              <span className="nav-link">Profile</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout" activeClassName="active">
              <span className="nav-link">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
