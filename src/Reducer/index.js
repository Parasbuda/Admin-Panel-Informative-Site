import {combineReducers} from "redux"
import authReducer from "./auth"
import AlertReducer from "./alert"
import messageReducer from "./message"

export default combineReducers({
    auth:authReducer,
    alert:AlertReducer,
    message:messageReducer,
})