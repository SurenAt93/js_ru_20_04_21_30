import React from 'react';

import Article from './Article';

import collapse from '../decorators/collapse';

import PropTypes from 'prop-types';

function ArticleList(props) {

  const { articles, isOpen, toggleOpen } = props;

  const elements = articles.map(
    article =>  <li key={article.id}>
                  <Article
                    article={article}
                    isOpen={isOpen(article.id)}
                    toggleOpen={toggleOpen(article.id)}
                  />
                </li>
    );

  return (
    <ul>
      {elements}
    </ul>
  );
}

ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  isOpen: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

export default collapse(ArticleList);