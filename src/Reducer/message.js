import { GET_MESSAGE, CREATE_MESSAGE } from "../Action/types";

const initialState = {};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};
export default messageReducer;
