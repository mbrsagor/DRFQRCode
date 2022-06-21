import Axios from "axios";
import { BASE_URL } from '../../urls';
import * as Types from "./types";

export const profit = () => (dispatch) => {
  Axios.get(`${BASE_URL}/app/profit/`)
    .then((res) => {
        dispatch({
            type: Types.ProfitType,
            payload: {}
        })
    })
    .catch((error) => {
      console.log(error);
    });
};
