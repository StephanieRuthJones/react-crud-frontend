import React from 'react'

export const DogCard = ({ dog }) => {
    return (
        <div className="dog-card">
            <img src={dog.image} alt="dog" />
            <div className="dog-specs">
                <h4>{dog.name}</h4>
                <p>{dog.breed}</p>
            </div>
        </div>
    )
}