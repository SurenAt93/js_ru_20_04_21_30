import React, { Component } from 'react';

import { increment } from '../AC';

import { connect } from 'react-redux';

class Counter extends Component {

    increment = ev => {
        const { increment } = this.props;

        increment();
    }

    render() {
        return (
            <h1>
                {this.props.count}
                <button onClick={ this.increment }>Increment</button>
            </h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps, { increment })(Counter);
