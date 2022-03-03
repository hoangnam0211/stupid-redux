import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  userReducer,
  counterReducer,
  todoReducer,
});

export default rootReducer;
