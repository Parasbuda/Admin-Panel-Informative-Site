import api from "../utils/api";
import { createMessage } from "./message";
import {
  MAIN_SLIDER_CREATE_FAIL,
  MAIN_SLIDER_CREATE_SUCCESS,
  GET_MAIN_SLIDER_SUCCESS,
  GET_MAIN_SLIDER_FAIL,
  MAIN_SLIDER_DELETED_SUCCESS,
  MAIN_SLIDER_DELETED_FAIL,
  MAIN_SLIDER_EDIT_SUCCESS,
  MAIN_SLIDER_EDIT_FAIL,
  LOADING
} from "./types";

export const getMainSliders = () => (dispatch) => {
  dispatch({
    type:LOADING
  })
  api
    .get(`/api/v1/province/?ordering=name`)
    .then((response) => {
      console.log(response,"res")
      dispatch({
        type: GET_MAIN_SLIDER_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MAIN_SLIDER_FAIL,
        payload: error,
      });
    });
};
//get previous main slider
export const getPrevious = (previous) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  api
    .get(`${previous}`)
    .then((response) => {
      dispatch({
        type: GET_MAIN_SLIDER_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MAIN_SLIDER_FAIL,
        payload: error,
      });
    });
};
//get next main slider
export const getNext = (next) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  api
    .get(`${next}`)
    .then((response) => {
      dispatch({
        type: GET_MAIN_SLIDER_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MAIN_SLIDER_FAIL,
        payload: error,
      });
    });
};
//get particular page main slider
export const getPageMainSlider = ({number,postsPerPage}) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  api
    .get(`api/v1/province/?offset=${(number-1)*postsPerPage}&ordering=name`)
    .then((response) => {
      dispatch({
        type: GET_MAIN_SLIDER_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MAIN_SLIDER_FAIL,
        payload: error,
      });
    });
};
//create main slider
export const createMainSlider = ({ name, is_active }) => (dispatch) => {
  const body = JSON.stringify({ name, is_active });
  dispatch({
    type:LOADING
  })
  api
    .post(`/api/v1/province/`, body)
    .then((response) => {
      dispatch(
        createMessage({ create: "Successfully Added !!!" })
      );
      dispatch({
        type: MAIN_SLIDER_CREATE_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch(
        createMessage({createFail: "Srrry!!! Operation Failed" })
      );
      dispatch({
        type: MAIN_SLIDER_CREATE_FAIL,
        payload: error,
      });
    });
};
// Delete main SLider
export const deleteMainSlider = ( id) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  api
    .delete(`/api/v1/province/${id}`)
    .then((response) => {
      console.log(response,"res")
      dispatch(
        createMessage({ delete: "Successfully Deleted !!!" })
      );
      dispatch({
        type: MAIN_SLIDER_DELETED_SUCCESS,
        payload: id,
      });
    })

    .catch((error) => {
      dispatch(
        createMessage({deleteFail: "Srrry!!! Operation Failed" })
      );
      dispatch({
        type: MAIN_SLIDER_DELETED_FAIL,
        payload: error,
      });
    });
};
// Edit main Slider
export const editMainSlider = (id) => (dispatch) => {
  dispatch({
    type:LOADING
  })
  //get the main Slider
  api
    .get(`/api/v1/province/${id}`)
    .then((response) => {
      dispatch({
        type: MAIN_SLIDER_EDIT_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: MAIN_SLIDER_EDIT_FAIL,
        payload: error,
      });
    });
   
    //delete the mainSLider
    api
    .delete(`/api/v1/province/${id}`)
    .then((response) => {
      dispatch({
        type: MAIN_SLIDER_DELETED_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: MAIN_SLIDER_DELETED_FAIL,
        payload: error,
      });
    });
};