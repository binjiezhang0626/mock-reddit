import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPostAction } from '../../actions';

const NewPost = ({ history, addPost }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleChange = (event) => (event.target.id === 'title'
    ? setTitle(event.target.value)
    : setUrl(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(title, url)
      .then(() => history.push('/'));
  };
  return (
    <div className="Frame">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Title</h5>
        <textarea
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <h5>Url</h5>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="URL"
          onChange={handleChange}
          value={url}
        />
        <br />
        <button className="submit" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ postStatus: state.postStatus });

const mapDispatchToProps = (dispatch) => ({
  addPost: (title, url) => dispatch(addPostAction(title, url)),
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
