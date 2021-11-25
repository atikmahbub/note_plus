import authReducer from "./authReducer";
import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import { userReducers } from "./userReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  users: userReducers,
});
