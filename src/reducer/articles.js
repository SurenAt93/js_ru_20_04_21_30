import { DELETE_ARTICLE } from '../constants';

import { articles as defaultArticles } from '../fixtures';

export default function articles(articles = defaultArticles, action) {
    const { type, payload } = action;

    switch(type) {
        case DELETE_ARTICLE:
            return articles.filter(item => item.id !== payload.id);
        default:
            return articles;
    }
}