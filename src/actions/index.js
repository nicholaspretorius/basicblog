import jsonPlaceholder from "./../api/jsonPlaceholder";
// import _ from "lodash";

export const getPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "GET_POSTS",
      payload: res.data
    });
  };
};

export const getUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "GET_USER",
    payload: res.data
  });
};

// export const getUser = id => dispatch => {
//   return _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "GET_USER",
//     payload: res.data
//   });
// });
