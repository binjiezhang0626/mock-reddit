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
        <div className="subVote">
          <div className="upvote" onClick={upvote} />
          <span>{post.score}</span>
          <div className="downvote" onClick={downvote} />
        </div>
      </div>

      <div className="content">
        <span>{post.skill}</span>
        <span>{post.type}</span>
        <span>{post.level}</span>
        <span>{post.description}</span>
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
    skill: PropTypes.string,
    type: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
  vote: PropTypes.func.isRequired,
};


export default connect(
  null,
  mapDispatchToProps,
)(Post);
