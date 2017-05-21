import {normalizedArticles as defaultArticles} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {})

let addComment = function (articles, {articleId, id: commentId}) {
  let newComments = [
    ...articles[articleId].comments,
    commentId
  ]
  let newArticle = {
    ...articles[articleId],
    comments: newComments
  }

  return {
    ...articles,
    [articleId]: newArticle
  }
};

export default (articles = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles[payload.id]
        case ADD_COMMENT:
            return addComment(articles, payload)
    }

    return articles
}