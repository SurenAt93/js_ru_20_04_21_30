import React, { Component } from 'react';

import { increment } from '../AC';

import Connect from '../decorators/connect';

class Counter extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <a href="#" onClick={this.handleIncrement}>increment</a>
      </div>
    );
  }

  handleIncrement = (ev) => {
    ev.preventDefault();
    this.props.increment();
  }

}

export default Connect(
  state => ({
    count: state.count
  }),
  { increment }
)(Counter);
