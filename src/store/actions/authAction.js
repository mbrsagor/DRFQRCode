import * as Types from "./types";
import Axios from "axios";

export const register = (user, history) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/register", user)
    .then((res) => {
      history.push("/login");
      console.log(res);
    })
    .catch((error) => {
      //   console.log(error)
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
