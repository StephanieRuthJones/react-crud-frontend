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

  addFavoriteDog = dog => {
    if (!this.state.favoriteDogs.includes(dog)) {
      this.setState({ favoriteDogs: [...this.state.favoriteDogs, dog] })
    }
  }

  removeFavoriteDog = dog => {
    const newFavoriteDogs = this.state.favoriteDogs.filter(favDog => {
      return favDog !== dog
    })
    this.setState({ favoriteDogs: newFavoriteDogs })
  }

  render() {
    console.log(this.state.favoriteDogs)
    return (
      <div>
        <Header />
        <FavoriteDogs
          favDogAction={this.removeFavoriteDog}
          favoriteDogs={this.state.favoriteDogs}
        />
        <AdoptableDogs
          favDogAction={this.addFavoriteDog}
          dogs={this.state.dogs}
        />
      </div>
    )
  }

}

export default App;
