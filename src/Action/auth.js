import { LOGIN_SUCCESS, LOGIN_FAIL, API_REQUEST_SUCCESS, API_REQUEST_FAIL } from "./types";
import api from "../utils/api"
//login

export const login = ({ username, password }) => (dispatch) => {
  const body = JSON.stringify({ username, password });

  api
    .post(`/api/token/`, body)
    .then((response) => {
      dispatch({
        type:API_REQUEST_SUCCESS,
        payload:response
      })
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type:API_REQUEST_FAIL,
        payload:error
      })
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    });
};
