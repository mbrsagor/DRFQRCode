import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer text-center">
                <p>All rights reserved || Develop by <Link to="#">Divine-IT Ltd.</Link> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
