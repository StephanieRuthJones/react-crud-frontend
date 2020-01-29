import React from 'react'

export const DogCard = ({ addFavoriteDog, dog }) => {
    const handleClick = () => {
        console.log("clicked")
        addFavoriteDog(dog)
    }
    return (
        <div
            className="dog-card"
            onClick={() => handleClick()}
        >
            <img src={dog.image} alt="dog" />
            <div className="dog-specs">
                <h4>{dog.name}</h4>
                <p>{dog.breed}</p>
            </div>
        </div>
    )
}