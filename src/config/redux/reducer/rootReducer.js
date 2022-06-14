import { combineReducers } from "redux";
import userReducer from "./userReducer";
import pekerjaReducer from "./pekerjaReducer";

const rootReducer = combineReducers({
  user: userReducer,
  pekerja: pekerjaReducer,
});

export default rootReducer;
