import Axios from "axios";
import { BASE_URL } from '../../urls';
import * as Types from "./types";

export const listTypes = () => (dispatch) => {
  Axios.get(`${BASE_URL}/types/`)
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
  Axios.post(`${BASE_URL}/types/`, types)
    .then((res) => {
      alert("Data created successfuly")
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


export const updateTypes = (id, types) => (dispatch) => {
  Axios.put(`${BASE_URL}/types/${id}/`, types)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: Types.UPDATE_TYPE,
        payload: {
          types: res.data.types,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    })
}

export const removeType = id => (dispatch) => {
  Axios.delete(`${BASE_URL}/types/${id}/`)
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
