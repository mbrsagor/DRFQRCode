import React from 'react';
import ReactDOM from 'react-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import jwtDecode from "jwt-decode";

import store from './store';
import * as Types from "./store/actions/types";
import setAuthToken from './utils/setAuthToken';


const token = localStorage.getItem("auth_token");
if (token) {
  let decode = jwtDecode(token)
  setAuthToken(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode
    }
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
