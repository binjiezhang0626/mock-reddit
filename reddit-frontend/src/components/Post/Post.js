/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteAction, getPostsAction } from '../../actions';

const Post = ({ post, vote, getPost }) => {
  const upAndDownVote = {
    upvote: () => vote(post.skill, 'upvote'),
    downvote: () => vote(post.skill, 'downvote'),
  };
  const handleVote = (e) => {
    upAndDownVote[e.target.className]().then(() => getPost());
  };

  return (
    <div className="post">

      <div className="vote">
        <div className="subVote" onClick={handleVote}>
          <div className="upvote" />
          <span>{post.score}</span>
          <div className="downvote" />
        </div>
      </div>

      <div className="content">
        <h3 className="skill">{post.skill}</h3>
        <span className="type">
          Type:
          {' '}
          {post.type}
        </span>
        <span className="level">
          Level:
          {' '}
          {post.level}
        </span>
        <p className="description">{post.description}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  vote: (skill, vote) => dispatch(voteAction(skill, vote)),
  getPost: () => dispatch(getPostsAction()),
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
  getPost: PropTypes.func.isRequired,
};


export default connect(
  null,
  mapDispatchToProps,
)(Post);
