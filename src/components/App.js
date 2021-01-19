import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
