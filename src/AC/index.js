import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES_BY_SELECTION, FILTER_ARTICLES_BY_DATE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticlesBySelection(selection) {
    return {
        type: FILTER_ARTICLES_BY_SELECTION,
        payload: { selection }
    }
}

export function filterArticlesByDate(date) {
    return {
        type: FILTER_ARTICLES_BY_DATE,
        payload: { date }
    }
}