import URL from '../config';

const FETCHED_POSTS = 'FETCHED_POSTS';
const FETCHED_ADDPOST = 'FETCHED_ADDPOST';
const FETCHED_VOTE = 'FETCHED_VOTE';

const fetchPostsAction = () => async (dispatch) => {
  const result = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const posts = await result.json();
  dispatch({
    type: FETCHED_POSTS,
    posts,
  });
};
const fetchAddPostAction = (title, url) => async (dispatch) => {
  const result = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, url }),
  });
  const post = await result.json();
  dispatch({
    type: FETCHED_ADDPOST,
    post,
  });
};
const fetchVoteAction = (id, score, vote) => async (dispatch) => {
  const result = await fetch(
    `${URL}/${id}/${score}/${vote}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const post = await result.json();
  dispatch({
    type: FETCHED_VOTE,
    post,
  });
};

export {
  fetchPostsAction,
  fetchAddPostAction,
  fetchVoteAction,
  FETCHED_POSTS,
  FETCHED_ADDPOST,
  FETCHED_VOTE,
};
