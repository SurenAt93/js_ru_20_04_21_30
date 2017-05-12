import React, { PureComponent } from 'react';

export default class CommentBox extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            commentText: ''
        }
    }

    render() {
        const style = {
            color: this.state.textColor
        }
        return (
            <div>
                <textarea style={style} value={this.state.commentText} onChange={this.handleChange} />
            </div>
        );
    }

    validateComment(comment) {
        const length = comment.length;
        if (length > 20) return false;
        return {
            textColor: (length < 10)? 'red' : 'black',
            commentText: comment
        }
    }

    handleChange = ev => {
        const validComment = this.validateComment(ev.target.value);
        if (validComment === false) return;
        this.setState({...validComment});
    }
}