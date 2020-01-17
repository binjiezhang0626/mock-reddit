import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchVoteAction } from "../../actions";

const Post = ({ post }) => (
  <div className="post">
    <div className="vote">
      <div className="upvote" />
      <span>{post.score}</span>
      <div className="downvote" />
    </div>
    <div className="content">
      <span>{post.title}</span>
      <br />
      <span>{post.url}</span>
      <br />
      <span>post at: {post.timestamp}</span>
      <br />
      <div>Comment</div>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    timestamp: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
};


export default Post;
