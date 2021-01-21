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

export const createNewType = (types) => (dispatch) => {
  Axios.post("http://127.0.0.1:8000/api/types/", types)
    .then((res) => {
      dispatch({
        type: Types.CREATE_TYPE,
        payload: {
          results: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeType = (id) => (dispatch) => {
  Axios.delete(`http://127.0.0.1:8000/api/types/${id}`)
    .then((res) => {
      dispatch({
        type: Types.REMOVE_TYPE,
        payload: {
          id: res.data.id,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
