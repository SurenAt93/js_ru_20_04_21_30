import React, { Component } from 'react';

export default class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {

    const comment = this.props.comment;

    const isOpen = this.state.isOpen;

    return (
      <div>
        <h3 onClick={this.toggleOpenComment} >
          { comment.user } (Click to { isOpen? 'hide' : 'see' } comment)
        </h3>

        { this.getCommentText(comment) }
      </div>
    );
  }

  toggleOpenComment = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  getCommentText(comment) {
    return this.state.isOpen && <p>{ comment.text }</p>;
  }

}