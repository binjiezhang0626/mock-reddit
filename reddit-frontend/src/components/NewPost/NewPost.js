/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPostAction } from '../../actions';
import './NewPost.css';

const initInput = {
  skill: '',
  type: '',
  level: '',
  description: '',
};

const NewPost = ({ history, addPost }) => {
  const [input, setInput] = useState(initInput);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(input)
      .then(() => history.push('/'));
  };
  return (
    <div className="Frame">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          name="skill"
          id="skill"
          placeholder="skill"
          onChange={handleChange}
          value={input.skill}
        />
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          value={input.type}
          onChange={handleChange}
        >
          <option value="">--Please choose a type--</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="level">Level</label>
        <select
          name="level"
          id="level"
          value={input.level}
          onChange={handleChange}
        >
          <option value="">--Please choose a level--</option>
          <option value="novice">Novice</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="Write some description..."
          onChange={handleChange}
          value={input.description}
        />
        <button className="submitButton" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ postStatus: state.postStatus });

const mapDispatchToProps = (dispatch) => ({
  addPost: (object) => dispatch(addPostAction(object)),
});

NewPost.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  addPost: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPost);
