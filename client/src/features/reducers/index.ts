import authReducer from "./authReducer";
import { combineReducers } from "redux";
import noteReducer from "./noteReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
});
