import React from 'react';
import './Post.css';
// import { connect } from "react-redux";
// import { fetchVoteAction } from "../../actions";

const Post = () => (
  <div className="post">
    <div className="vote">
      <div className="upvote" />
      <span>score</span>
      <div className="downvote" />
    </div>
    <div className="content">
      <span>title</span>
      <br />
      <span>url</span>
      <br />
      <span>timestamp</span>
    </div>
  </div>
);

export default Post;
