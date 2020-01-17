import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Posts.css';
import Post from '../Post/Post';
import { fetchPostsAction } from '../../actions';

const Posts = ({ posts, fetchPostsAction }) => {
  useEffect(() => {
    fetchPostsAction();
  }, []);

  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ posts: state.posts });

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPostsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchPostsAction },
)(Posts);
