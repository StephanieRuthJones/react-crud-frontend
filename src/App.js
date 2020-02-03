import React, { Component } from 'react'
import './App.css'

import { Header } from './components/Header'
import { AdoptableDogs } from './components/AdoptableDogs'
import { FavoriteDogs } from './components/FavoriteDogs'
import { SearchBar } from './components/SearchBar'
import AddDogForm from './components/AddDogForm'

const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'

class App extends Component {
  state = {
    dogs: [],
    favoriteDogs: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(this.parseJSON)
      .then(dogs => this.setState({ dogs }))
  }


  parseJSON = response => {
    return response.json()
  }

  addAdoptableDog = dog => {
    return fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    }).then(this.parseJSON)
      .then(dog => this.setState({ dogs: [...this.state.dogs, dog] }))
  }

  deleteAdoptableDog = dog => {
    const newAdoptableDogs = this.state.dogs.filter(adoptableDog => {
      return adoptableDog !== dog
    })

    this.setState({ dogs: newAdoptableDogs })
    fetch(`${BASE_URL}/${dog.id}`, {
      method: "DELETE"
    })
  }

  //CHALLENGE: search by name, breed, AND age
  filteredDogs = () => {
    const { dogs, searchTerm } = this.state
    return dogs.filter(dog => {
      return (dog.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
        || (dog.breed
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
        || (dog.age
          .toString()
          .includes(searchTerm))
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

  //create a function that updates a single dog
  updateDog = (id, dog) => {

    console.log("dog and id", dog, id)
    const newDog = { id, ...dog }
    console.log("new dog", newDog)
    // this.setState({
    //   dogs: [...this.state.dogs.filter(dog => dog.id !== id), newDog]
    // })
    //try to update state with new dog object

    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    }).then(response => response.json())
      .then(dog => this.setState({
        dogs: [...this.state.dogs.filter(dog => dog.id !== id), dog]
      }))

  }

  render() {
    return (
      <div className="App" >
        <Header />

        {/* <FavoriteDogs
          favoriteDogs={this.state.favoriteDogs}
          favDogAction={this.removeFavoriteDog}
          deleteAdoptableDog={this.deleteAdoptableDog}
          handleSubmit={this.updateDog}
        /> */}
        <SearchBar
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
        />
        <AdoptableDogs
          favDogAction={this.addFavoriteDog}
          dogs={this.filteredDogs()}
          deleteAdoptableDog={this.deleteAdoptableDog}
          handleSubmit={this.updateDog}
        />
        <AddDogForm
          handleSubmit={this.addAdoptableDog}
        />
      </div>
    )
  }
}

export default App;
