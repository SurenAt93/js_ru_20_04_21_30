import React from 'react';

import PropTypes from 'prop-types';

function Comment({comment}) {
  return (
    <div>
      <p>{comment.text}</p> <p><b>{comment.user}</b></p>
    </div>
  );
}

Comment.proptypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    user: PropTypes.string
  }).isRequired
}

export default Comment;