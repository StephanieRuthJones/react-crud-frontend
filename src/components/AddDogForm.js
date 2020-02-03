import React, { Component } from 'react'

class AddDogForm extends Component {
    state = {
        name: "",
        breed: "",
        age: 0,
        image: ""
    }
    componentDidMount() {
        if (this.props.defaultDog) {
            this.setState({ ...this.props.defaultDog })
        }
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    dogAction = event => {
        event.preventDefault()
        const { name, breed, age, image } = this.state
        this.props.handleSubmit({ name, breed, age, image })
        this.setState({
            name: "",
            breed: "",
            age: 0,
            image: ""
        })
    }

    render() {
        console.log(this.state)
        return (
            <form
                className="add-dog-form"
                onSubmit={this.dogAction}
            >
                <h1>Add an Adoptable Dog:</h1>
                <input
                    required
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    required
                    name="breed"
                    type="text"
                    value={this.state.breed}
                    onChange={this.handleChange}
                />
                <input
                    required
                    name="age"
                    type="number"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    required
                    name="image"
                    type="text"
                    value={this.state.image}
                    onChange={this.handleChange}
                />
                <input type="submit" />

            </form>
        )
    }
}
export default AddDogForm

//create form
//onsubmit and onchange 
//pass fn from App that posts dog and setState
//handlechange function
