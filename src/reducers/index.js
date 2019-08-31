import { combineReducers } from "redux";
import getAllPostsReducer from "./getPostsReducer";

const selectPostReducer = (selectedPost = null, action) => {
  if (action.type === "SELECT_POST") {
    return action.payload;
  }

  return selectedPost;
};

export default combineReducers({
  posts: getAllPostsReducer,
  selectedPost: selectPostReducer
});
