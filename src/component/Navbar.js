import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">
                  <h2>My Shop</h2>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="main_menu text-center">
                <nav>
                  <ul>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/">Checkout</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
