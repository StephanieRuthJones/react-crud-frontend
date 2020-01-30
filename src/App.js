import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header'
import { AdoptableDogs } from './components/AdoptableDogs'
import { FavoriteDogs } from './components/FavoriteDogs'
import { SearchBar } from './components/SearchBar'

const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'

class App extends Component {
  state = {
    dogs: [],
    favoriteDogs: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }
//CHALLENGE: search by name, breed, AND age
  filteredDogs = () => {
    const { dogs, searchTerm } = this.state
    return dogs.filter(dog => {
      return dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  //AddDogForm component => needs to be able to add a new dog

  updateSearchTerm = term => {
    this.setState({ searchTerm: term })
  }

  addFavoriteDog = dog => {
    if (!this.state.favoriteDogs.includes(dog)) {
      this.setState({ favoriteDogs: [...this.state.favoriteDogs, dog] })
    }
  }

  removeFavoriteDog = dog => {
    const newFavDogs = this.state.favoriteDogs.filter(favDog => {
      return favDog !== dog
    })
    this.setState({ favoriteDogs: newFavDogs })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <FavoriteDogs
          favoriteDogs={this.state.favoriteDogs}
          favDogAction={this.removeFavoriteDog}
        />
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
        />
        <AdoptableDogs
          favDogAction={this.addFavoriteDog}
          dogs={this.filteredDogs()}
        />
      </div>
    )
  }
}

export default App;
