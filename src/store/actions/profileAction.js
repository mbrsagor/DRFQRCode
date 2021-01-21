import * as Types from "./types";
import Axios from "axios";

export const activeUser = () => (dispatch) => {
  Axios.get("http://127.0.0.1:8000/api/user/current-user")
    .then((res) => {
        console.log(res);
        dispatch({
            type: Types.ACTIVE_USER,
            payload: {}
        })
    })
    .catch((error) => {
      console.log(error);
    });
};
