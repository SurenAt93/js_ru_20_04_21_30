import {normalizedArticles as defaultArticles} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc, [article.id]: article
}), {});

export default (articles = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            let newArticlesList = Object.assign({}, articles);
            delete newArticlesList[payload.id];
            return newArticlesList;
        case ADD_COMMENT:
            const {articleId, id: commentId} = payload;

            return {
                ...articles,
                [articleId]: {
                    ...articles[articleId],
                    comments: [
                        ...articles[articleId].comments,
                        commentId
                    ]
                }
              }
    }

    return articles
}