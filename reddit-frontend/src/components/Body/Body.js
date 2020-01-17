import React from 'react';
import './Body.css';
import Posts from '../Posts/Posts';
import RightSide from '../RightSide/RightSide';

const Body = (props) => (
  <div className="Body">
    <div className="Frame">
      <Posts />
      <RightSide history={props.history} />
    </div>
  </div>
);
export default Body;
