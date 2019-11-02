import React, { Component } from "react";

export default class Details extends Component {
  specification = {
    name: "Another new item",
    price: 25000,
    brand: "New brand",
    ram: 20,
    backup: "2 days",
    madeBy: "Bangladesh"
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <div className="details_page">
            <h1>Details page</h1>
            {/* <img src={logo} alt="{this.specification.name}" /> */}
          </div>
        </div>
        <div className="col-lg-5">
          <div className="details_page">
            <h1>specification</h1>
            <hr />
            <p>
              <b>Name</b>: {this.specification.name}
            </p>
            <p>
              <b>Price</b>: {this.specification.price}
            </p>
            <p>
              <b>Brand</b>: {this.specification.brand}
            </p>
            <p>
              <b>Backup</b>: {this.specification.backup}
            </p>
            <p>
              <b>Ram</b>: {this.specification.ram} GB
            </p>
            <p>
              <b>Made By </b>: {this.specification.madeBy}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
