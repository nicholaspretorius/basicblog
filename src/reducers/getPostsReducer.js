const getAllPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payloaf;
    default:
      return state;
  }
};

export default getAllPostsReducer;
