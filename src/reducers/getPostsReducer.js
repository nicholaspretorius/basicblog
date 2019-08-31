const getAllPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload.data;
    default:
      return state;
  }
};

export default getAllPostsReducer;
