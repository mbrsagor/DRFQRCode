
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux;


export class DjAuth extends Component {
  
  render() {
    return (
      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ml-auto">
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
    );
  }
}


const mapStateToProps => state({
    auth: state.auth
}) 

export default connect(mapStateToProps, {}) (DjAuth);
