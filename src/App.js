import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    dogs: []
  }

  componentDidMount() {
    fetch('https://dogs-backend.herokuapp.com/dogs')
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }
  render() {
    console.log(this.state)
    return (
      <h1>App.js</h1>
    )
  }

}

export default App;
