import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header'
import { AdoptableDogs } from './components/AdoptableDogs'
import { FavoriteDogs } from './components/FavoriteDogs'

class App extends Component {
  state = {
    dogs: [],
    favoriteDogs: []
  }

  componentDidMount() {
    fetch('https://dogs-backend.herokuapp.com/dogs')
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  render() {
    console.log(this.state.dogs)
    return (
      <div>
        <Header />
        <FavoriteDogs />
        <AdoptableDogs dogs={this.state.dogs} />
      </div>
    )
  }

}

export default App;
