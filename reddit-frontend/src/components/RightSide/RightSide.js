import React from 'react';
import PropTypes from 'prop-types';
import './RightSide.css';

const RightSide = ({ history }) => {
  const handleClick = (event) => {
    event.preventDefault();
    history.push('/newpost');
  };
  return (
    <div className="RightSide">
      <button
        className="addnewButton"
        type="submit"
        onClick={handleClick}
      >
        ADD NEW SKILL
      </button>
      <div className="note" />
    </div>
  );
};

RightSide.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default RightSide;
