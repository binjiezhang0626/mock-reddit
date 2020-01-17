/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Posts.css';
import Post from '../Post/Post';
import { getPostsAction } from '../../actions';

const Posts = ({ posts, getPost }) => {
  useEffect(() => {
    getPost();
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

const mapDispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPostsAction()),
});

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    map: PropTypes.func,
  })).isRequired,
  getPost: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
