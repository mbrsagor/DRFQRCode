import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Default from "./component/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
