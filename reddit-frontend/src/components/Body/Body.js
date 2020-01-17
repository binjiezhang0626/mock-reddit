import React from 'react';
import './Body.css';
import Posts from '../Posts/Posts';

const Body = () => (
  <div className="Body">
    <div className="Frame">
      <Posts />
      <div className="RightSide">
        SUBMIT A NEW POST
      </div>
    </div>
  </div>
);

export default Body;
