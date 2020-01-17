import { GET_POSTS, VOTE } from './actions';

const initState = {
  posts: [],
};
const updateState = (posts, updatedPost) => posts.map((post) => (
  post.id === updatedPost.id ? updatedPost : post));

const rootReducer = (state = initState, action) => {
  if (action.type === GET_POSTS) {
    return {
      posts: action.posts,
    };
  }
  // if (action.type === FETCHED_ADDPOST) {
  //   return {
  //     ...state,
  //     postStatus: action.message,
  //   };
  // }
  if (action.type === VOTE) {
    return {
      posts: updateState(state.posts, action.post),
    };
  }
  return state;
};
export default rootReducer;
