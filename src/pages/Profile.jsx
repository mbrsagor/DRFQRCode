import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  componentDidMount() {
    document.title = "Profile page";
  }

  render() {
    return (
      <div className="col-md-6 offset-3">
        <div className="card">
          <div className="header-header">
            <h2>Who I'm?</h2>
          </div>
          <div className="card-body">
            <h3>I'm comming soon...</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
