import { combineReducers } from "redux";
import postReducer from "./PostSlice";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
