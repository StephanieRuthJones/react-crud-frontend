import React, { Component } from 'react'
import AddDogForm from './AddDogForm'

class DogCard extends Component {
    state = {
        showForm: false
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    handleClick = () => {
        this.props.favDogAction(this.props.dog)
    }

    handleDelete = () => {
        this.props.deleteAdoptableDog(this.props.dog)
    }

    editDog = newDog => {
        this.props.handleSubmit(this.props.dog.id, newDog)
    }
    render() {
        return (
            <div
                className="dog-card"
                onClick={this.handleClick}
            >
                <img src={this.props.dog.image} alt={this.props.dog.name} />
                <div className="dog-specs">
                    <h4><b>{this.props.dog.name}</b></h4>
                    <p>Breed: {this.props.dog.breed}</p>
                    <p>Age: {this.props.dog.age}</p>
                </div>
                <button onClick={this.handleDelete}>DELETE</button>

                <button onClick={this.toggleForm}>SHOW FORM</button>

                {this.state.showForm
                    ? <AddDogForm defaultDog={this.props.dog} handleSubmit={this.editDog} />
                    : null}
            </div>
        )
    }
}

export default DogCard