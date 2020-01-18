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
const addPostAction = (object) => async () => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
};
const voteAction = (skill, vote) => async () => {
  await fetch(
    `${URL}/${skill}/${vote}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    },
  );
};

export {
  getPostsAction,
  addPostAction,
  voteAction,
  GET_POSTS,
  ADD_POST,
  VOTE,
};
