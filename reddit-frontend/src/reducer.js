import { GET_POSTS } from './actions';

const initState = {
  posts: [],
};
// const updateState = (posts, updatedPost) => posts.map((post) => (
//   post.id === updatedPost.id ? updatedPost : post));

const rootReducer = (state = initState, action) => {
  if (action.type === GET_POSTS) {
    return {
      posts: action.posts,
    };
  }
  return state;
};
export default rootReducer;
