import * as Types from "./types";
import Axios from "axios";

export const listTypes = () => (dispatch) => {
  Axios.get("http://127.0.0.1:8000/api/types/")
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: Types.LOAD_TYPE,
        payload: {
          types: res.data,
        },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
