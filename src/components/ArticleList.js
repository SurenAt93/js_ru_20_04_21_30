import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {

    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
                     ref = {article.id}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(
    mapStateToProps
)(accordion(ArticleList));