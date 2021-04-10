import loggedReducer from "./isLogged";
import todosReducer from "./todos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todos: todosReducer,
  isLogged: loggedReducer,
});

export default allReducers;
