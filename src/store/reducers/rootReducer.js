import { combineReducers } from "redux";
import authReducer from "./authReducer";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  types: typeReducer,
});

export default rootReducer;
