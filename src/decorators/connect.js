import React, { Component } from 'react';

import store from '../store';

export default (mapStateToComponent, actionCreators) => Component => class Connected extends Component {

  constructor(props) {
    super(props);

    this.actionCreatorsWithDispatch = Object.keys(actionCreators).reduce((acc, key) => ({
      ...acc,
      [key]: (...args) => store.dispatch(actionCreators[key](...args))
    }), {});

    this.state = mapStateToComponent(store.getState(), props);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStoreChange = () => {
    this.setState(mapStateToComponent(store.getState(), this.props));
  }

  render() {
    return <Component {...this.props} {...this.state} {...this.actionCreatorsWithDispatch} />;
  }
}