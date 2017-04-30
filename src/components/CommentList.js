import React from 'react';

import Comment from './Comment';

import PropTypes from 'prop-types';

import toggleOpen from '../decorators/toggleOpen';

function CommentList(props) {
  const { isOpen, toggleOpen } = props;

  const linkText = isOpen ? 'Hide comments' : 'Show comments';

  return (
    <div>
      <a href="#" onClick={toggleOpen}>{linkText}</a>
      {getBody(props)}
    </div>
  );
}

CommentList.defaultProps = {
  comments: []
}

CommentList.proptypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

function getBody({ isOpen, comments = [] }) {
  if (!isOpen) return null;
  if (!comments.length) return <p>There are no comments yet.</p>;
  return (
    <ul>
      {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
    </ul>
  );
}

export default toggleOpen(CommentList);