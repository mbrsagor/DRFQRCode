import * as Types from './types';
import Axios from 'axios';


export const register = user => dispatch => {
    Axios.post("http://127.0.0.1:8000/api/register", user)
        .then(res => {
            console.log(res)  
        }).catch(error => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}
