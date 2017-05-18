import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        console.log('---', ref, findDOMNode(ref))
    }

    getIntersectionOfArticles(articles, selectedArticles) {
        return articles.filter(article => {
            const found = selectedArticles.filter(item => article.id === item.value);
            if (found.length !== 0) return true;
            return false;
        });
    }

    choosedArticles(articles, selectedArticles, dateRange) {
        if (selectedArticles.length === 0) return articles;
        const intersectionOfArticles = this.getIntersectionOfArticles(articles, selectedArticles);

        if (dateRange.from && dateRange.to) {
            const from = Date.parse(dateRange.from);
            const to = Date.parse(dateRange.to);
            return intersectionOfArticles.filter(item => (Date.parse(item.date) > to && Date.parse(item.date) < from));
        }

        return intersectionOfArticles;
    }

    render() {
        const {articles, toggleOpenItem, isItemOpened, selectedArticles, dateRange} = this.props

        let choosedArticles = this.choosedArticles(articles, selectedArticles, dateRange);

        const elements = choosedArticles.map(article => <li key={article.id}>
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

export default connect(({articles, selectedArticles, dateRange}) => ({
        articles,
        selectedArticles,
        dateRange
    })
)(accordion(ArticleList))