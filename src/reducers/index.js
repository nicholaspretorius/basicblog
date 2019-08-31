import { combineReducers } from "redux";
import getAllPostsReducer from "./getPostsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: getAllPostsReducer,
  users: usersReducer
});
