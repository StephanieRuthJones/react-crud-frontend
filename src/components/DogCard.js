import React from 'react'

export const DogCard = ({ dog, favDogAction }) => {
    const handleClick = () => {
        favDogAction(dog)
    }

    return (
        <div
            className="dog-card"
            onClick={handleClick}
        >
            <img src={dog.image} alt={dog.name} />
            <div className="dog-specs">
                <h4><b>{dog.name}</b></h4>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
            </div>
        </div>
    )
}