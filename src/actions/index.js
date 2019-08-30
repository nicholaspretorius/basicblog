import jsonPlaceholder from "./../api/jsonPlaceholder";

export const getPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "GET_POSTS",
      payload: res
    });
  };
};

export const selectPost = post => {
  return {
    type: "SELECT_POST",
    payload: post
  };
};
