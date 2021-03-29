import Axios from "axios";
import jwtDecode from "jwt-decode";
import { BASE_URL } from '../../urls';
import setAuthToken from '../../utils/setAuthToken';
import * as Types from "./types";


export const register = (user, history) => (dispatch) => {
  Axios.post("register", user)
    .then((res) => {
      history.push(`${BASE_URL}/login`);
      console.log(res.data);
    })
    .catch((error) => {
        console.log(error)
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

export const login = (user, history) => (dispatch) => {
    Axios.post(`${BASE_URL}/token/`, user)
        .then(res => {
           console.log(res.data);
            let token = res.data.access;
            localStorage.setItem('auth_token', token)
            setAuthToken(token)
            let decode = jwtDecode(token)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decode
                }
            })
            history.push('/dashboard')
        })
        .catch(error => {
            // console.log(error.response.data)
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
};


export const logout = history => {
    localStorage.removeItem('auth_token')
    history.push('/login')
    return {
        type: Types.SET_USER,
        payload: {
            user: {}
        }
    }
}
