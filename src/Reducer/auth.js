import { LOGIN_SUCCESS, LOGIN_FAIL } from "../Action/types";

const initialState = {
  isAuthenticated: null,
};

const authReducer= (state = initialState, action)=> {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("accessToken",action.payload.data.access)
      localStorage.setItem("refreshToken",action.payload.data.refresh)
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
export default authReducer