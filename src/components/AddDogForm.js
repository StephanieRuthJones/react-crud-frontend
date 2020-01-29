import React from 'react'

class AddDogForm extends Component {
    state = {
        newDog: {
            name: "",
            breed: "",
            age: 0,
            image: ""
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const { name, breed, age, image } = this.state.newDog

        this.props.addAdoptableDog({ name, breed, age, image })

        this.setState({
            newDog: {
                name: "",
                breed: "",
                age: 0,
                image: ""
            }
        })
    }

    handleChange = event => {
        const { newDog } = this.state
        newDog[event.target.name] = event.target.value
        this.setState({ newDog })
    }

    render() {
        const { name, breed, age, image } = this.state.newDog

        return (
            <form className="add-dog-form"
                onSubmit={this.submitHandler}
            >
                <h1>Add An Adoptable Dog:</h1>
                <input
                    name="name"
                    type="text"
                    required
                    value={name}
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                <input
                    name="breed"
                    type="text"
                    required
                    value={breed}
                    placeholder="Breed"
                    onChange={this.handleChange}
                />
                <input
                    name="age"
                    type="number"
                    required
                    value={age}
                    placeholder="Age"
                    onChange={this.handleChange}
                />
                <input
                    name="image"
                    type="text"
                    required
                    value={image}
                    placeholder="Image"
                    onChange={this.handleChange}
                />

                <input type="submit"
                    value="Submit"
                />
            </form>
        )
    }
}
