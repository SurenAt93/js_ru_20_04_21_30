import React, { Component } from 'react';

import Comment from './Comment';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false
    }
  }

  render() {

    const comments = this.props.comments;

    const elements = this.getCommentsElements(comments);

    const isOpen = this.state.isOpen;

    return (

      <div>
        <div>
          <h4 onClick={this.toggleOpenComments}> { isOpen? 'Hide' : 'Show' } Comments </h4>
        </div>

        { this.getComments(elements) }
      </div>

    );
  }

  toggleOpenComments = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  getCommentsElements(comments) {
    if (comments) {
      return comments.map(
        comment => <li key={comment.id}><Comment comment={comment} /></li>
      );
    } else {
      return <p>There are no comments</p>;
    }
  }

  getComments(elements) {
    if (this.state.isOpen) {
      return <ul>{elements}</ul>;
    } else {
      return false;
    }
  }
}