import * as Types from "./types";
import Axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from '../../utils/setAuthToken';


export const register = (user, history) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/register", user)
    .then((res) => {
      history.push("/login");
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
    Axios.post('http://127.0.0.1:8000/api/token/', user)
        .then(res => {
        //    console.log(res);
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
            history.push('/')
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
