import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default class CommentBox extends PureComponent {

    static propTypes = {
        minLength: PropTypes.number,
        maxLength: PropTypes.number
    }

    static defaultProps = {
        minLength: 10,
        maxLength: 20
    }

    constructor(props) {
        super(props);
        
        this.state = {
            commentText: '',
            userName: '',
            textColor: 'black'
        }

        this.initialState = this.state;
    }

    render() {
        const style = {
            color: this.state.textColor
        }
        return (
            <div>
                <div>
                    User: <input value={this.state.userName} onChange={this.handleChangeUser} />
                </div>
                <div className="comment-text-area">
                    Comment: <textarea style={style} value={this.state.commentText} onChange={this.handleChangeComment} />
                </div>
                <div>
                    <button disabled={this.canSend()} onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        );
    }

    canSend() {
        return !(this.state.userName && this.state.commentText.length > this.props.minLength);
    }

    validateComment(comment) {
        const { minLength: min, maxLength: max } = this.props;
        const length = comment.length;
        if (length > max) return false;
        return {
            textColor: (length < min)? 'red' : 'black',
            commentText: comment
        }
    }

    handleChangeComment = ev => {
        const validComment = this.validateComment(ev.target.value);
        if (validComment === false) return;
        this.setState({...validComment});
    }

    handleChangeUser = ev => {
        const userName = ev.target.value;
        this.setState({userName});
    }

    handleSubmit = ev => {
        this.setState(this.initialState);
    }
}