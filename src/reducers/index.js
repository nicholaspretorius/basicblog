import { combineReducers } from "redux";
import axios from "axios";

const getAllPostsReducer = () => {
  //const typicode = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //console.log("Posts: ", typicode);
  //return posts;
  return [
    {
      id: 1,
      title: "Post 1",
      userId: 1,
      body: "Blah"
    },
    {
      id: 2,
      title: "Post 2",
      userId: 1,
      body: "Blah blah"
    },
    {
      id: 3,
      title: "Post 3",
      userId: 2,
      body: "Blah blah blah"
    },
    {
      id: 4,
      title: "Post 4",
      userId: 2,
      body: "Blah blah blah blah"
    },
    {
      id: 5,
      title: "Post 5",
      userId: 3,
      body: "Blah blah blah blah"
    }
  ];
};

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
