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
        <div className="subFrame">
          <h5>Skill</h5>
          <input
            type="text"
            name="skill"
            placeholder="skill"
            onChange={handleChange}
            value={input.skill}
          />
          <h5>Type</h5>
          <select
            name="type"
            value={input.type}
            onChange={handleChange}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
          <h5>Level</h5>
          <select
            name="level"
            value={input.level}
            onChange={handleChange}
          >
            <option value="novice">Novice</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <h5>Description</h5>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={input.description}
          />
          <button className="submit" type="submit">SUBMIT</button>
        </div>
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
