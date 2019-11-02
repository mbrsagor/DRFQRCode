import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="padding_bottom155px">
              sorry ! 404 not found :) <br />
              you maybe visit wrong page. <br />
              <Link to="/">Home</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
