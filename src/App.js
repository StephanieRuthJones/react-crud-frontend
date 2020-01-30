import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header'
import { AdoptableDogs } from './components/AdoptableDogs'
import { FavoriteDogs } from './components/FavoriteDogs'

const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'

class App extends Component {
  state = {
    dogs: [],
    favoriteDogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  //add fav dog => no duplicates
  addFavoriteDog = dog => {
    this.setState({ favoriteDogs: [...this.state.favoriteDogs, dog] })
  }

  removeFavoriteDog = dog => {
    const newFavDogs = this.state.favoriteDogs.filter(favDog => {
      return favDog !== dog
    })
    this.setState({ favoriteDogs: newFavDogs })
  }

  render() {
    console.log("state", this.state.favoriteDogs)
    return (
      <div className="App" >
        <Header />
        <FavoriteDogs
          favoriteDogs={this.state.favoriteDogs}
          favDogAction={this.removeFavoriteDog}
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
