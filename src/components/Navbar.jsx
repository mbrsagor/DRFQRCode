import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";

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
            <NavLink to="/profile" activeClassName="active">
              <span className="nav-link">Profile</span>
            </NavLink>
          </li>
          <button onClick={() => this.props.logout(this.props.history)} className="btn btn-danger btn-sm">Logout</button>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
