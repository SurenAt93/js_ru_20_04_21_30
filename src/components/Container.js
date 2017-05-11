import React, { Component } from 'react';

import { articleStore } from '../stores';

import ArticleList from './ArticleList';

import Counter from './Counter';

export default class Container extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      articles: articleStore.getAll()
    }
  }

  componentDidMount() {
    articleStore.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    articleStore.removeChangeListener(this.handleChange);
  }

  handleChange = () => {
    this.setState({
      articles: articleStore.getAll() 
    });
  }

  render() {
    return (
      <div>
        <Counter />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}