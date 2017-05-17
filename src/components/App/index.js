import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Chart from '../Chart'
import UserForm from '../UserForm'
import Select from 'react-select'
import Range from '../Range/'
import Counter from '../Counter'

import 'react-select/dist/react-select.css'
import './style.css'

class App extends Component {
    static propTypes = {

    };

    state = {
        counter: 0,
        selection: null
    }

    render() {
        // const options = this.props.articles.map(article => ({
        //     label: article.title,
        //     value: article.id
        // }))
        return (
            <div>
                <Counter />
                <Range />
                <UserForm />
                <a href="#" onClick = {this.updateCounter}>update chart</a>
                <Select options = {[]} />
                <ArticleList />
                <Chart />
            </div>
        )
    }

    updateCounter = ev => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleSelectionChange = selection => this.setState({ selection })
}

export default App