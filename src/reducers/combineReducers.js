import { combineReducers } from "redux";
import authLoginReducer from "./AuthLogin";
import usersReducer from "./Users";
import changePasswordReducer from "./ChangePassword";

export default combineReducers({
  authLoginReducer,
  usersReducer,
  changePasswordReducer
});
