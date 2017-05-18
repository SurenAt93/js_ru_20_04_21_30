import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { filterArticlesBySelection } from '../../AC/'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const { articles, selection } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {selection}
                    onChange = {this.handleSelectionChange}
                    multi = {true}
            />
        )
    }

    handleSelectionChange = selection => {
        const { filterArticlesBySelection: filter } = this.props;
        filter(selection);
    }

}

function mapStateToProps(state) {
    return {
        selection: state.selectedArticles,
        articles: state.articles
    }
}

export default connect(mapStateToProps, {
    filterArticlesBySelection
})(SelectFilter);