import axios from "axios";

export const getSongs = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    type: "GET_POSTS",
    payload: posts
  };
};

export const selectPost = post => {
  return {
    type: "SELECT_POST",
    payload: post
  };
};
