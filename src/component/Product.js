import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../api/data";


export default class Product extends Component {
  state = { data };

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map( item => (
              <tr key={ item.id}>
                <th scope="row">{item.id}</th>
                  <td><Link to="details/{item.id}">{item.title}</Link></td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><img src={item.image} alt="product"/></td>
                <td><Link to="details">View</Link></td>
                </tr>
                 ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
