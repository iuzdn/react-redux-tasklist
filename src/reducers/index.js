import loggedReducer from "./isLogged";
import itemsReducer from "./items";
import currentReducer from "./currentItem";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  items: itemsReducer,
  current: currentReducer,
  isLogged: loggedReducer,
});

export default allReducers;
