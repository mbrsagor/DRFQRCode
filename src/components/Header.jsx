import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthNav from './AuthNav';

class Header extends Component {
  render() {
    let { auth } = this.props;

    console.log(auth);

    return (
      <nav className="nav navbar-expand-lg navbar-inverse navbar-dark navbar-fixed-top bg-dark">
        <Link to="/">
          <span className="navbar-brand">Django React App</span>
        </Link>
        {auth.isAuthenticated ? <Navbar /> : <AuthNav />}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
