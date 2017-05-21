import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addComment } from '../../AC/index'
import { connect } from 'react-redux'
import './style.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        comment: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.comment}
                                onChange = {this.handleChange('comment')}
                                className = {this.getClassName('comment')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        // without validation
        ev.preventDefault()
        const articleId = this.props.articleId;
        this.props.addComment({...this.state, articleId});
        this.setState({
            user: '',
            comment: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }

}

export default connect(null, { addComment })(CommentForm)