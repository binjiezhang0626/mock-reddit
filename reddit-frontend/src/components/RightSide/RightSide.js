import React from 'react';

const RightSide = ({ history }) => {
  const handleClick = (event) => {
    event.preventDefault();
    history.push('/newpost');
  };
  return (
    <div className="RightSide">
      <button onClick={handleClick}>SUBMIT A NEW POST</button>
    </div>
  );
};
export default RightSide;
