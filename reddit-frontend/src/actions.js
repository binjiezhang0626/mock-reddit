import URL from '../config';

const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';
const VOTE = 'VOTE';

const getPostsAction = () => async (dispatch) => {
  const result = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const posts = await result.json();
  dispatch({
    type: GET_POSTS,
    posts,
  });
};
const addPostAction = (title, url) => async () => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, url }),
  });
  // const message = await result.json();
  // dispatch({
  //   type: FETCHED_ADDPOST,
  //   message,
  // });
};
const voteAction = (id, score, vote) => async (dispatch) => {
  const result = await fetch(
    `${URL}/${id}/${score}/${vote}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const post = await result.json();
  dispatch({
    type: VOTE,
    post,
  });
};

export {
  getPostsAction,
  addPostAction,
  voteAction,
  GET_POSTS,
  ADD_POST,
  VOTE,
};
