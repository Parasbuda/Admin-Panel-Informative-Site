import {
    GET_MAIN_SLIDER_SUCCESS,
    GET_MAIN_SLIDER_FAIL,
    MAIN_SLIDER_CREATE_FAIL,
    MAIN_SLIDER_CREATE_SUCCESS,
    MAIN_SLIDER_DELETED_SUCCESS,
    MAIN_SLIDER_DELETED_FAIL,
    MAIN_SLIDER_EDIT_SUCCESS,
    MAIN_SLIDER_EDIT_FAIL,
    LOADING
  } from "../Action/types";
  
  const initialState = {
    mainSliders: [],
    edit:false,
    mainSlider:null,
    count:null,
    next:null,
    previous:null,
    loading:false
  };
  
  const mainSliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading:true
        }
      case GET_MAIN_SLIDER_SUCCESS:
        return {
          ...state,
          mainSliders: action.payload.data.results,
          edit:false,
          count:action.payload.data.count,
          next:action.payload.data.next,
          previous:action.payload.data.previous,
          loading:false
        };
      case GET_MAIN_SLIDER_FAIL:
        return {
          ...state,
          edit:false,
          loading:false
        };
      case MAIN_SLIDER_CREATE_SUCCESS:
        return {
          ...state,
          mainSliders:[...state.mainSliders, action.payload.data],
          edit:false,
          loading:false
        };
      case MAIN_SLIDER_CREATE_FAIL:
        return {
          ...state,
          loading:false
        };
      case MAIN_SLIDER_DELETED_SUCCESS:
        return {
          ...state,
          mainSliders: state.mainSliders.filter(
            (mainSlider) => mainSlider.id !== action.payload
          ),
          loading:false,
        };
  
      case MAIN_SLIDER_DELETED_FAIL:
        return {
          ...state,
          loading:false
        };
  
      case MAIN_SLIDER_EDIT_SUCCESS:
        return {
          ...state,
          mainSliders:state.mainSliders.filter(mainSlider=>mainSlider.id!==action.payload),
          mainSlider:state.mainSliders.find(mainSlider=>mainSlider.id===action.payload),
          edit:true,
          loading:false
        };
      case MAIN_SLIDER_EDIT_FAIL:
        return {
          ...state,
          mainSlider:null,
          edit:false,
          loading:false
        };
  
      default:
        return state;
    }
  };
  export default mainSliderReducer;
  