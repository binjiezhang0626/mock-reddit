/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteAction } from '../../actions';

const Post = ({ post, vote }) => {
  const upvote = () => {
    vote(post._id, post.score, 'upvote');
  };

  const downvote = () => {
    vote(post._id, post.score, 'downvote');
  };
  return (
    <div className="post">
      <div className="vote">
        <div className="upvote" onClick={upvote} />
        <span>{post.score}</span>
        <div className="downvote" onClick={downvote} />
      </div>
      <div className="content">
        <span>{post.title}</span>
        <br />
        <span>{post.url}</span>
        <br />
        <span>
          post at:
          {' '}
          {post.timestamp}
        </span>
        <br />
        <div>Comment</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  vote: (id, score, vote) => dispatch(voteAction(id, score, vote)),
});

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    timestamp: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
  vote: PropTypes.func.isRequired,
};


export default connect(
  null,
  mapDispatchToProps,
)(Post);
