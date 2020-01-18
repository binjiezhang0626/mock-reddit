import React from 'react';
import './Body.css';
import PropTypes from 'prop-types';
import Posts from '../Posts/Posts';
import RightSide from '../RightSide/RightSide';

const Body = ({ history }) => (
  <div className="Body">
    <div className="Frame">
      <Posts />
      <RightSide history={history} />
    </div>
  </div>
);

Body.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Body;
