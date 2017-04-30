import React, {Component} from 'react';

import PropTypes from 'prop-types';

import CommentList from './CommentList';

class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }

  render() {
    const {article, toggleOpen} = this.props;

    return (
      <section>
        <h2 onClick={toggleOpen}>
          {article.title}
        </h2>
        {this.getBody()}
      </section>
    )
  }

  getBody() {
    const { isOpen, article } = this.props;

    return isOpen && (
      <div>
        {article.text}
        <CommentList comments={article.comments} />
      </div>
    );
  }
}

export default Article;