import {API_REQUEST_SUCCESS,API_REQUEST_FAIL} from "../Action/types";

const initialState = {
  text:'',
  error:null,
  success:null,
};

const AlertReducer= (state = initialState, action) =>{
  switch (action.type) {
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        text:action.payload,
        error:false,
        success:true
      };
    case API_REQUEST_FAIL:
      return {
        ...state,
        text:action.payload.response.data.detail,
        error:true,
        success:false
      };
      
    default:
      return state;
  }
}
export default AlertReducer
