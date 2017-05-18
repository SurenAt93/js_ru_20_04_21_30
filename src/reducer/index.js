import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterArticlesBySelection from './filterArticlesBySelection'
import chooseDate from './chooseDate'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles: filterArticlesBySelection,
    dateRange: chooseDate
})